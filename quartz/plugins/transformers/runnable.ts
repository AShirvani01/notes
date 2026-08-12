import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import type { Root, Code } from "mdast"
import type { Element, ElementContent, Properties } from "hast"
import { execFileSync } from "node:child_process"
import { mkdtempSync, writeFileSync, readdirSync, readFileSync, rmSync, existsSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

// Plain JS (no TypeScript/bundling needed) — embedded directly as an inline
// script resource below, since a transformer plugin has no automatic way to
// get a .inline.ts file bundled the way a Component's afterDOMLoaded script
// does. This handles tab switching plus lazy Pyodide/webR execution.
// Encoded via JSON.stringify-equivalent escaping (done at generation time,
// see build notes) rather than a raw template literal — a template literal
// would process \n/\\ escapes in its OWN content, silently turning literal
// "\\n" sequences meant for the *inner* script into real newline bytes,
// which breaks JS string literals inside the embedded script (this was the
// actual cause of the earlier "Invalid or unexpected token" errors).
// Encoded via JSON-string escaping (see build notes) rather than a raw
// template literal — a template literal would process \n/\\ escapes in
// its OWN content, silently turning literal "\\n" sequences meant for the
// *inner* script into real newline bytes, which broke JS string literals
// inside the embedded script.
// Encoded via JSON-string escaping (see build notes) rather than a raw
// template literal — a template literal would process \n/\\ escapes in
// its OWN content, silently turning literal "\\n" sequences meant for the
// *inner* script into real newline bytes, which broke JS string literals
// inside the embedded script.
// Encoded via JSON-string escaping (see build notes) rather than a raw
// template literal — a template literal would process \n/\\ escapes in
// its OWN content, silently turning literal "\\n" sequences meant for the
// *inner* script into real newline bytes, which broke JS string literals
// inside the embedded script.
const CLIENT_SCRIPT = ";(function () {\n  function setStatus(block, lang, txt) {\n    var el = block.querySelector('.runnable-status[data-lang=\"' + lang + '\"]')\n    if (el) el.textContent = txt\n  }\n\n  // Reveals precomputed output with a smooth opacity fade. Content is\n  // already fully present in the DOM (baked in at build time) \u2014 this only\n  // ever animates what's already there, it never executes anything.\n  function animateReveal(output) {\n    if (!output || output.dataset.animating === \"true\") return\n    output.dataset.animating = \"true\"\n\n    output.classList.remove(\"js-pending\")\n    output.style.opacity = \"0\"\n    void output.offsetWidth // force reflow so the transition below actually runs\n    output.style.transition = \"opacity 0.5s ease\"\n    output.style.opacity = \"1\"\n\n    setTimeout(function () {\n      output.dataset.animating = \"false\"\n    }, 500)\n  }\n\n  function wireBlock(block) {\n    if (block.dataset.runnableWired) return\n    block.dataset.runnableWired = \"true\"\n\n    block.querySelectorAll(\".runnable-tab\").forEach(function (btn) {\n      btn.addEventListener(\"click\", function () {\n        var lang = btn.getAttribute(\"data-lang\")\n        block.querySelectorAll(\".runnable-tab\").forEach(function (b) { b.classList.remove(\"active\") })\n        block.querySelectorAll(\".runnable-panel\").forEach(function (p) { p.classList.remove(\"active\") })\n        btn.classList.add(\"active\")\n        var panel = block.querySelector('.runnable-panel[data-lang=\"' + lang + '\"]')\n        if (panel) panel.classList.add(\"active\")\n      })\n    })\n\n    // Hide precomputed output until \"Run\" is clicked \u2014 but only once JS has\n    // actually run, so visitors without JS still see the output immediately\n    // (the whole point of baking it in at build time).\n    block.querySelectorAll(\".runnable-output\").forEach(function (output) {\n      output.classList.add(\"js-pending\")\n    })\n\n    block.querySelectorAll(\".runnable-run\").forEach(function (btn) {\n      btn.addEventListener(\"click\", function () {\n        var lang = btn.getAttribute(\"data-lang\")\n        var output = block.querySelector('.runnable-output[data-lang=\"' + lang + '\"]')\n        setStatus(block, lang, \"\")\n        animateReveal(output)\n      })\n    })\n  }\n\n  function wireAll() {\n    document.querySelectorAll(\".runnable-block\").forEach(wireBlock)\n  }\n\n  // Quartz's SPA router dispatches a \"nav\" event on every page transition\n  // (including the very first load). wireAll() also runs immediately in case\n  // this script executes after that first event already fired.\n  document.addEventListener(\"nav\", wireAll)\n  wireAll()\n})()"

// Encode every literal "<" and "&" as a \uXXXX escape. Functionally
// identical JavaScript once parsed by the browser, but guarantees the raw
// text we hand to Quartz's externalResources() never contains a literal
// "<" or "&" byte — so it can't be corrupted if anything upstream applies
// HTML-entity escaping to script content (which is what caused loop
// conditions like "i < arr.length" to break with "&lt;" showing up as
// literal text in the page's <script> tag).
const SAFE_CLIENT_SCRIPT = CLIENT_SCRIPT.replace(/</g, "\\u003C").replace(/&/g, "\\u0026")


interface Options {
  // Marker lines that split sections inside a `runnable` fence.
  pythonMarker: RegExp
  rMarker: RegExp
  // Execute code at build time (using real python3/Rscript on the build
  // machine) and bake the output directly into the page, so it's visible
  // instantly without the visitor's browser needing to boot Pyodide/webR
  // first. The "Re-run live" button still uses Pyodide/webR for anyone who
  // wants to execute edited code interactively on the published page.
  // Requires python3 (with numpy/matplotlib/pandas) and Rscript to be
  // installed wherever `npx quartz build` runs. Set to false to skip
  // build-time execution entirely and rely only on client-side "Run".
  precompute: boolean
}

const defaultOptions: Options = {
  pythonMarker: /^::\s*python\s*::\s*$/im,
  rMarker: /^::\s*r\s*::\s*$/im,
  precompute: true,
}

/**
 * Splits the raw contents of a ```runnable fence into { python, r } source
 * strings, based on "::python::" / "::r::" marker lines.
 *
 * Note: we deliberately avoid "%%" as a marker — Obsidian treats "%% ... %%"
 * as a comment delimiter pair, and Quartz's ObsidianFlavoredMarkdown strips
 * everything between two "%%" occurrences from the raw source *before* the
 * fence content is even parsed. Any marker syntax used here must not contain
 * "%%", "==" (Obsidian highlight), or "[[" / "]]" (wikilinks).
 */
function splitSections(raw: string, opts: Options): { python?: string; r?: string } {
  const lines = raw.split("\n")
  const sections: { python?: string; r?: string } = {}
  let current: "python" | "r" | null = null
  let buf: string[] = []

  const flush = () => {
    if (current && buf.length) {
      const text = buf.join("\n").trim()
      if (text.length) sections[current] = text
    }
    buf = []
  }

  for (const line of lines) {
    if (opts.pythonMarker.test(line)) {
      flush()
      current = "python"
      continue
    }
    if (opts.rMarker.test(line)) {
      flush()
      current = "r"
      continue
    }
    buf.push(line)
  }
  flush()

  return sections
}

let blockCounter = 0

// --- small helpers for building real hast nodes (no raw-HTML strings) ---

// --- build-time execution (runs once, at `quartz build` time, using real
// python3/Rscript on the build machine) so the page shows output instantly
// without needing to boot a WASM runtime in the visitor's browser first.
// The "Run" button remains, to re-execute live via Pyodide/webR if someone
// wants to experiment with edited code on the published page.

function text(value: string): ElementContent {
  return { type: "text", value }
}

type ExecResult = { ok: true; stdout: string; images: string[] } | { ok: false; error: string }

// Windows has no "python3" binary — it's "python" (or the "py" launcher).
// macOS/Linux usually only have "python3" (bare "python" may be Python 2 or
// absent entirely). Try candidates in order and cache whichever first
// responds successfully, so we only pay the resolution cost once per build.
let resolvedPythonCmd: string | null | undefined // undefined = not yet checked, null = none found
const PYTHON_CANDIDATES = process.platform === "win32" ? ["python", "py"] : ["python3", "python"]

function resolvePythonCmd(): string | null {
  if (resolvedPythonCmd !== undefined) return resolvedPythonCmd
  for (const cmd of PYTHON_CANDIDATES) {
    try {
      execFileSync(cmd, ["--version"], { stdio: "pipe" })
      resolvedPythonCmd = cmd
      return cmd
    } catch {
      // try next candidate
    }
  }
  resolvedPythonCmd = null
  return null
}

function runPythonBuildTime(code: string): ExecResult {
  const pythonCmd = resolvePythonCmd()
  if (!pythonCmd) {
    return {
      ok: false,
      error:
        `Could not find a working Python interpreter (tried: ${PYTHON_CANDIDATES.join(", ")}). ` +
        "Install Python and make sure it's on PATH, or set precompute: false in quartz.config.ts " +
        "to skip build-time execution and rely on the in-browser 'Re-run live' button instead.",
    }
  }

  const dir = mkdtempSync(join(tmpdir(), "runnable-py-"))
  const scriptPath = join(dir, "script.py")
  const preamble = [
    "import matplotlib",
    "matplotlib.use('AGG')",
    "import matplotlib.pyplot as plt",
    "import io, base64",
    "",
    "def _capture_show(*args, **kwargs):",
    "    buf = io.BytesIO()",
    "    plt.savefig(buf, format='png', bbox_inches='tight')",
    "    buf.seek(0)",
    "    img_b64 = base64.b64encode(buf.read()).decode('utf-8')",
    "    plt.close('all')",
    "    print('__PLOT_B64__' + img_b64)",
    "",
    "plt.show = _capture_show",
    "",
  ].join("\n")
  try {
    writeFileSync(scriptPath, preamble + "\n" + code)
    const stdout = execFileSync(pythonCmd, [scriptPath], { encoding: "utf-8", timeout: 20000 })
    return { ok: true, stdout, images: [] } // plots arrive inline via __PLOT_B64__ markers in stdout
  } catch (err: any) {
    return { ok: false, error: String(err.stderr || err.message || err) }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

const R_PLOT_WIDTH = 700
const R_PLOT_HEIGHT = 500

// On some R installations/platforms, simply opening a png() device — even
// with zero actual drawing calls — writes out a blank image file. Rather
// than assume either behavior, generate a real blank-device reference file
// on whatever machine is actually running the build, once, and filter out
// any per-block output that matches it byte-for-byte. undefined = not yet
// computed; null = this R/platform doesn't produce a file for an empty
// device at all, so there's nothing to filter.
let blankRPlotSignature: string | null | undefined

function getBlankRPlotSignature(): string | null {
  if (blankRPlotSignature !== undefined) return blankRPlotSignature
  const dir = mkdtempSync(join(tmpdir(), "runnable-r-blank-"))
  const file = join(dir, "blank.png")
  const scriptPath = join(dir, "blank.R")
  try {
    writeFileSync(
      scriptPath,
      `png(${JSON.stringify(file)}, width = ${R_PLOT_WIDTH}, height = ${R_PLOT_HEIGHT})\ninvisible(dev.off())\n`,
    )
    execFileSync("Rscript", ["--vanilla", scriptPath], { timeout: 20000 })
    blankRPlotSignature = existsSync(file) ? readFileSync(file).toString("base64") : null
  } catch {
    blankRPlotSignature = null
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
  return blankRPlotSignature
}

function runRBuildTime(code: string): ExecResult {
  const dir = mkdtempSync(join(tmpdir(), "runnable-r-"))
  const scriptPath = join(dir, "script.R")
  const plotPattern = join(dir, "plot%03d.png")
  const wrapped = [
    `png(${JSON.stringify(plotPattern)}, width = ${R_PLOT_WIDTH}, height = ${R_PLOT_HEIGHT})`,
    `source(textConnection(${JSON.stringify(code)}), echo = FALSE, print.eval = TRUE)`,
    `invisible(dev.off())`,
    "",
  ].join("\n")
  try {
    writeFileSync(scriptPath, wrapped)
    const stdout = execFileSync("Rscript", ["--vanilla", scriptPath], { encoding: "utf-8", timeout: 20000 })
    const blankSig = getBlankRPlotSignature()
    const images = readdirSync(dir)
      .filter((f) => f.endsWith(".png"))
      .sort()
      .map((f) => readFileSync(join(dir, f)).toString("base64"))
      .filter((b64) => b64 !== blankSig)
    return { ok: true, stdout, images }
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return {
        ok: false,
        error:
          "Could not find 'Rscript' on PATH. Install R from https://cran.r-project.org " +
          "and make sure its bin folder is added to PATH (the Windows installer does not " +
          "always do this automatically — you may need to add it manually in " +
          "Settings > System > Advanced > Environment Variables). " +
          "Alternatively, set precompute: false in quartz.config.ts to skip build-time " +
          "execution and rely on the in-browser 'Re-run live' button instead.",
      }
    }
    return { ok: false, error: String(err.stderr || err.message || err) }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

// Builds the hast children for a precomputed .runnable-output div: stdout
// text as <pre>, any plots as <img>. For Python, plots arrive as
// "__PLOT_B64__..." markers embedded in stdout (same protocol the client
// script uses); for R, they arrive as separate PNG files from the graphics
// device.
function buildPrecomputedOutput(result: ExecResult): ElementContent[] {
  if (!result.ok) {
    return [h("pre", { className: ["runnable-error"] }, [text(result.error)])]
  }

  const children: ElementContent[] = []
  const parts = result.stdout.split(/__PLOT_B64__([A-Za-z0-9+/=]+)/g)
  parts.forEach((part, i) => {
    if (i % 2 === 0) {
      if (part.trim()) {
        children.push(h("pre", { className: ["runnable-stdout"] }, [text(part.trim())]))
      }
    } else {
      children.push(h("img", { className: ["runnable-plot"], src: `data:image/png;base64,${part}` }))
    }
  })
  for (const img of result.images) {
    children.push(h("img", { className: ["runnable-plot"], src: `data:image/png;base64,${img}` }))
  }
  return children
}

function h(tagName: string, properties: Properties, children: ElementContent[] = []): Element {
  return { type: "element", tagName, properties, children }
}

function buildPanel(lang: "python" | "r", code: string, active: boolean, precomputed: ElementContent[]): Element {
  const classes = ["runnable-panel"]
  if (active) classes.push("active")
  return h("div", { className: classes, "data-lang": lang, "data-code-b64": Buffer.from(code, "utf-8").toString("base64") }, [
    h("pre", { className: ["runnable-source"] }, [
      h("code", { className: [`language-${lang}`] }, [text(code)]),
    ]),
    h("div", { className: ["runnable-controls"] }, [
      h("button", { className: ["runnable-run"], "data-lang": lang }, [text("▶ Run")]),
      h("span", { className: ["runnable-status"], "data-lang": lang }),
    ]),
    h("div", { className: ["runnable-output"], "data-lang": lang }, precomputed),
  ])
}

function buildBlock(sections: { python?: string; r?: string }, opts: Options): Element {
  const id = `runnable-${blockCounter++}`
  const hasPy = !!sections.python
  const hasR = !!sections.r
  const defaultLang: "python" | "r" = hasPy ? "python" : "r"

  const tabs: Element[] = []
  const panels: Element[] = []

  if (hasPy) {
    const classes = ["runnable-tab"]
    if (defaultLang === "python") classes.push("active")
    tabs.push(h("button", { className: classes, "data-lang": "python" }, [text("Python")]))
    const precomputed = opts.precompute
      ? buildPrecomputedOutput(runPythonBuildTime(sections.python!))
      : []
    panels.push(buildPanel("python", sections.python!, defaultLang === "python", precomputed))
  }

  if (hasR) {
    const classes = ["runnable-tab"]
    if (defaultLang === "r") classes.push("active")
    tabs.push(h("button", { className: classes, "data-lang": "r" }, [text("R")]))
    const precomputed = opts.precompute
      ? buildPrecomputedOutput(runRBuildTime(sections.r!))
      : []
    panels.push(buildPanel("r", sections.r!, defaultLang === "r", precomputed))
  }

  return h("div", { className: ["runnable-block"], id }, [
    h("div", { className: ["runnable-tabs"] }, tabs),
    h("div", { className: ["runnable-panels"] }, panels),
  ])
}

export const Runnable: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "Runnable",
    markdownPlugins() {
      return [
        () => (tree: Root) => {
          visit(tree, "code", (node: Code) => {
            if (node.lang !== "runnable") return
            const sections = splitSections(node.value ?? "", opts)
            if (!sections.python && !sections.r) return

            const hast = buildBlock(sections, opts)

            // Retarget this node to a custom type with no built-in
            // mdast-to-hast handler, then fully describe its HTML output via
            // data.hName/hProperties/hChildren. This is the documented
            // mdast-util-to-hast mechanism for "unknown" nodes and doesn't
            // depend on allowDangerousHtml / rehype-raw at all — the same
            // technique Quartz's own OFM plugin uses for things like
            // mermaid code blocks and callouts.
            ;(node as any).type = "runnableBlock"
            delete (node as any).value
            delete (node as any).lang
            delete (node as any).meta
            node.data = {
              hName: hast.tagName,
              hProperties: hast.properties as any,
              hChildren: hast.children,
            }
          })
        },
      ]
    },
    externalResources() {
      return {
        js: [
          {
            script: SAFE_CLIENT_SCRIPT,
            loadTime: "afterDOMReady",
            contentType: "inline",
          },
        ],
      }
    },
  }
}