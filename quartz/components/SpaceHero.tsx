import { QuartzComponentConstructor } from "./types"
// @ts-ignore
import styles from "./styles/spaceHero.scss"

function SpaceHero() {
  return (
    <div class="space-hero">
      {/* Hidden defs — turbulence + displacement filter that warps the
          fade edge into an irregular, non-radial shape */}
      <svg width="0" height="0" style="position:absolute" aria-hidden="true">
        <defs>
          <filter
            id="nebula-warp"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.009"
              numOctaves="2"
              seed="11"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="140"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div class="hero-textblock">
        <div class="hero-title">The Stats Cluster:</div>
        <div class="hero-subtitle">
          Stuck in Latent Space
          <span class="dot-loader">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-photo-frame">
          <img
            class="hero-img"
            src="/static/spacedog.jpg"
            alt="Dog floating in a cardboard box among the stars"
          />
        </div>
        <div class="hero-fade" aria-hidden="true" />
      </div>
    </div>
  )
}

SpaceHero.css = styles

export default (() => SpaceHero) satisfies QuartzComponentConstructor
