import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/logo.png")
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="logo" src={iconPath} alt={title} />
      </a>
      <a href={baseDir}>
        {title}
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  display: flex;
  flex-direction: column;
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.logo {
  height: max;
  width: auto;
}
@media (max-width: 768px) {
  .page-title {
    flex-direction: row;
    font-size: 1rem;
    align-items: center;
  }
  
  .logo {
    height: 1rem;
    margin-right: 0.5rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

/* ORIGINAL
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
*/