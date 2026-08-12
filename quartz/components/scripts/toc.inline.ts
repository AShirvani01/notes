function getHeadingChain(headers: HTMLElement[], currentIndex: number): HTMLElement[] {
  const chain: HTMLElement[] = []
  let minDepth = Infinity
  for (let i = currentIndex; i >= 0; i--) {
    const depth = parseInt(headers[i].tagName[1], 10)
    if (depth < minDepth) {
      chain.push(headers[i])
      minDepth = depth
    }
  }
  return chain
}

function applyActiveChain(chain: HTMLElement[]) {
  document
    .querySelectorAll(".toc-content a[data-for]")
    .forEach((a) => a.classList.remove("in-view"))

  chain.forEach((heading) => {
    document
      .querySelectorAll(`a[data-for="${heading.id}"]`)
      .forEach((a) => a.classList.add("in-view"))
  })
}

let headers: HTMLElement[] = []
let activeIndex = -1
let suppressObserver = false
let suppressTimer: number | undefined

function activateByIndex(index: number) {
  activeIndex = index
  applyActiveChain(getHeadingChain(headers, index))
}

const observer = new IntersectionObserver(
  (entries) => {
    if (suppressObserver) return

    for (const entry of entries) {
      const idx = headers.findIndex((h) => h.id === entry.target.id)
      if (idx === -1) continue

      if (entry.isIntersecting) {
        activateByIndex(idx)
      }
    }
  },
  { rootMargin: "-10% 0px -85% 0px", threshold: 0 },
)

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

function setupTocClickHighlight() {
  const links = document.querySelectorAll(".toc-content a[data-for]")
  links.forEach((link) => {
    const onClick = () => {
      const slug = link.getAttribute("data-for")
      const index = headers.findIndex((h) => h.id === slug)
      if (index === -1) return

      activateByIndex(index)

      suppressObserver = true
      window.clearTimeout(suppressTimer)
      suppressTimer = window.setTimeout(() => {
        suppressObserver = false
      }, 600)
    }
    link.addEventListener("click", onClick)
    window.addCleanup(() => link.removeEventListener("click", onClick))
  })
}

document.addEventListener("nav", () => {
  setupToc()
  setupTocClickHighlight()

  observer.disconnect()
  headers = Array.from(
    document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),
  ) as HTMLElement[]
  headers.forEach((header) => observer.observe(header))

  activeIndex = -1
})