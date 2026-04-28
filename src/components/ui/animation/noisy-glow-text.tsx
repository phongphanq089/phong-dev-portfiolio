import { useEffect, useId, useRef, useState } from "react"

/**
 * Pure (no DOM) viewBox estimate — runs identically on server and client.
 * Avoids hydration mismatches caused by DOM access in useState initializers.
 * fontSize is in SVG user units (same as px at default SVG px scale).
 */
const estimateViewBox = (
  text: string,
  fontSize: number,
  padX: number,
  padY: number,
  TX: number,
  TY: number
) => {
  // Weight-900 font: chars are wide ≈ 0.68× fontSize, cap-height ≈ 0.72× fontSize
  const estW = fontSize * text.length * 0.68
  const estH = fontSize * 0.72
  return {
    x: TX - estW / 2 - padX,
    y: TY - estH / 2 - padY,
    w: estW + padX * 2,
    h: estH + padY * 2,
  }
}

interface NoisyGlowTextProps {
  text: string
  /**
   * Any valid CSS color: hex, rgb(), hsl(), or CSS variable e.g. "var(--color-primary-color)".
   * Defaults to a deep blue.
   */
  glowColor?: string
  /**
   * If true, the component scales to fill its parent container width.
   */
  isFull?: boolean
  className?: string
}

/**
 * Resolve a CSS color value (including CSS variables) to an rgb() string
 * by briefly painting it on a hidden div and reading it back via getComputedStyle.
 * Falls back to the raw value if DOM is unavailable (SSR).
 */
const resolveColor = (color: string): string => {
  if (typeof document === "undefined") return color
  const el = document.createElement("div")
  el.style.color = color
  el.style.position = "absolute"
  el.style.opacity = "0"
  el.style.pointerEvents = "none"
  document.body.appendChild(el)
  const resolved = getComputedStyle(el).color // always "rgb(r, g, b)"
  document.body.removeChild(el)
  return resolved || color
}

/**
 * Parse any CSS color string (e.g. "rgb(0, 34, 255)" or "#0022ff") into
 * normalized 0-1 RGB components for SVG feColorMatrix.
 */
const parseToNormalizedRgb = (
  color: string
): { r: number; g: number; b: number } => {
  // rgb / rgba
  const rgbMatch = color.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/
  )
  if (rgbMatch) {
    return {
      r: Number(rgbMatch[1]) / 255,
      g: Number(rgbMatch[2]) / 255,
      b: Number(rgbMatch[3]) / 255,
    }
  }
  // hex
  const hex = color.replace("#", "")
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16) / 255,
      g: parseInt(hex[1] + hex[1], 16) / 255,
      b: parseInt(hex[2] + hex[2], 16) / 255,
    }
  }
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
    }
  }
  return { r: 0, g: 0.13, b: 1 } // fallback blue
}

/**
 * NoisyGlowText
 *
 * Height strategy
 * ───────────────
 * • `overflow="visible"` on the SVG lets the glow bleed outside the box freely,
 *   so the viewBox only needs to cover the *visual* text height — not the glow spread.
 * • `getBBox()` returns the full font metrics (ascender + descender). For ALL-CAPS
 *   text there is no descender, so we trim ≈18 % off the bottom to reclaim that space.
 * • `padY = 6` is just enough to keep the very top/bottom of the glow inside the box
 *   for the aspect-ratio calculation; the rest bleeds via overflow.
 * • `document.fonts.ready` triggers a re-measure after web fonts load so the initial
 *   system-font bbox is replaced by the real one.
 */
export const NoisyGlowText: React.FC<NoisyGlowTextProps> = ({
  text,
  glowColor = "#0022FF",
  isFull = false,
  className = "",
}) => {
  // Unique IDs so multiple instances on the same page don't share filters
  const uid = useId().replace(/:/g, "")
  const filterId = `ngf-${uid}`

  const textRef = useRef<SVGTextElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Resolve CSS variable / any color to normalized RGB for feColorMatrix
  const [{ r, g, b }, setRgb] = useState({ r: 0, g: 0.13, b: 1 })

  // SVG coordinate center (large value avoids accidental origin clipping)
  const TX = 5000
  const TY = 5000
  const PAD_X = 16
  const PAD_Y = 6

  /**
   * SSR-safe initial viewBox — pure math, no DOM access.
   * Produces the same value on server and client → no hydration mismatch.
   * Uses weight-900 character width factor for fontSize=120px SVG units.
   * getBBox() in useEffect fine-tunes this; the delta is small enough that
   * the opacity fade-in masks any remaining micro-jitter.
   */
  const [vb, setVb] = useState(() =>
    estimateViewBox(text, 120, PAD_X, PAD_Y, TX, TY)
  )

  useEffect(() => {
    // Resolve the color once on mount (needs DOM for CSS variables)
    const resolved = resolveColor(glowColor)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRgb(parseToNormalizedRgb(resolved))
  }, [glowColor])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)

    const measure = () => {
      const el = textRef.current
      if (!el) return
      try {
        const bbox = el.getBBox()
        if (bbox.width <= 0 || bbox.height <= 0) return

        /**
         * Trim descender space for uppercase-only text.
         * Most fonts allocate ~18-20 % of the em-square for descenders.
         * Since uppercase glyphs don't use it, that space shows as empty pixels.
         */
        const isUpperCase =
          text === text.toUpperCase() &&
          /[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞ]/.test(text)
        const visualH = isUpperCase ? bbox.height * 0.82 : bbox.height

        // Minimal pads — glow bleed is handled by overflow="visible"
        setVb({
          x: bbox.x - PAD_X,
          y: bbox.y - PAD_Y,
          w: bbox.width + PAD_X * 2,
          h: visualH + PAD_Y * 2,
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        /* element not yet in DOM or hidden */
      }
    }

    const observer = new ResizeObserver(measure)
    if (textRef.current) observer.observe(textRef.current)

    // Re-measure after web fonts finish loading
    document.fonts?.ready.then(measure)
    measure()

    return () => observer.disconnect()
  }, [text])

  const matrixValues = `0 0 0 0 ${r.toFixed(3)} 0 0 0 0 ${g.toFixed(3)} 0 0 0 0 ${b.toFixed(3)} 0 0 0 1.5 0`

  return (
    <div
      className={`relative flex items-center justify-center bg-transparent select-none ${isFull ? "w-full" : "inline-flex"} ${className}`}
    >
      <div
        className={
          !isMounted
            ? "w-full opacity-0"
            : "w-full opacity-100 transition-opacity duration-300"
        }
      >
        <svg
          width="100%"
          viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
          /*
           * w-full h-auto → height derived from viewBox aspect ratio.
           * overflow="visible" → glow renders outside the SVG box without needing
           * large padding that would inflate the aspect ratio and thus the height.
           * display:block removes the inline bottom gap browsers add to SVGs.
           */
          className="block h-auto w-full"
          style={{ display: "block", overflow: "visible" }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          overflow="visible"
        >
          <title>{text}</title>
          <defs>
            {/*
             * Filter region: x/y/width/height are relative to the filtered element's bbox.
             * Smaller region = less wasted computation. Glow bleeds via SVG overflow anyway.
             */}
            <filter id={filterId} x="-20%" y="-30%" width="140%" height="160%">
              {/* 1. Dilate — thicken character forms */}
              <feMorphology
                in="SourceAlpha"
                operator="dilate"
                radius="3"
                result="dilated"
              />

              {/* 2. Glow — large Gaussian blur */}
              <feGaussianBlur
                in="dilated"
                stdDeviation="12"
                result="blurredGlow"
              />

              {/* 3. Grain texture */}
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                result="noise"
              />

              {/* 4. Mask noise to glow shape */}
              <feComposite
                in="noise"
                in2="blurredGlow"
                operator="in"
                result="noisyGlow"
              />

              {/* 5. Colorize */}
              <feColorMatrix
                in="noisyGlow"
                type="matrix"
                values={matrixValues}
                result="coloredNoisyGlow"
              />

              {/* 6. Soft core on top of noisy glow */}
              <feGaussianBlur in="dilated" stdDeviation="1.5" result="core" />

              {/* 7. Merge all layers */}
              <feMerge>
                <feMergeNode in="coloredNoisyGlow" />
                <feMergeNode in="core" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <text
            ref={textRef}
            x={TX}
            y={TY}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              filter: `url(#${filterId})`,
              fill: glowColor,
              fontFamily: "inherit",
              fontWeight: "900",
              fontSize: "120px",
            }}
            className="tracking-tighter"
          >
            {text}
          </text>
        </svg>
      </div>
    </div>
  )
}
