"use client"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

/**
 * Pure (no DOM) text width estimate — runs identically on server and client.
 * Uses a per-character width factor for bold Helvetica at the given fontSize.
 * Good enough as an initial viewBox so the layout shift after useEffect is tiny.
 */
const estimateViewBox = (
  text: string,
  fontSize: number,
  pad: number,
  TX: number,
  TY: number
) => {
  // Bold sans-serif ≈ 0.62× fontSize per char for mixed caps, 0.75× cap-height
  const estW = fontSize * text.length * 0.62
  const estH = fontSize * 0.75
  return {
    x: TX - estW / 2 - pad,
    y: TY - estH / 2 - pad,
    w: estW + pad * 2,
    h: estH + pad * 2,
  }
}

const FONT_SIZE = 80
const FONT_FAMILY = "helvetica, sans-serif"
const FONT_WEIGHT = "bold"
const PAD = 2

// Large origin offset so the text bbox stays well into positive space
const TX = 5000
const TY = 5000

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string
  duration?: number
  automatic?: boolean
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<SVGTextElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  /**
   * SSR-safe initial viewBox — pure math, same result on server and client.
   * Avoids hydration mismatch that occurs when using canvas (DOM) in useState.
   * The estimate is close enough to the actual SVG bbox that the useEffect
   * fine-tuning causes only a sub-pixel height change.
   */
  const [vb, setVb] = useState(() =>
    estimateViewBox(text, FONT_SIZE, PAD, TX, TY)
  )

  // Mask position in absolute SVG user-space coordinates
  const [maskPos, setMaskPos] = useState({ cx: TX, cy: TY })

  useEffect(() => {
    /**
     * Fine-tune the viewBox with the more accurate SVG getBBox() measurement.
     * Because the canvas measurement is already close, the change here will be
     * tiny (sub-pixel visually) so there's no perceptible layout shift.
     */
    const measure = () => {
      if (!textRef.current) return
      try {
        const b = textRef.current.getBBox()
        if (b.width > 0 && b.height > 0) {
          setVb({
            x: b.x - PAD,
            y: b.y - PAD,
            w: b.width + PAD * 2,
            h: b.height + PAD * 2,
          })
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        /* element not in DOM yet */
      }
    }

    measure()
    // Re-measure after web fonts finish loading (may change metrics slightly)
    document.fonts?.ready.then(measure)
  }, [])

  useEffect(() => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const fracX = (cursor.x - rect.left) / rect.width
    const fracY = (cursor.y - rect.top) / rect.height
    setMaskPos({
      cx: vb.x + fracX * vb.w,
      cy: vb.y + fracY * vb.h,
    })
  }, [cursor, vb])

  const textProps = {
    x: TX,
    y: TY,
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
    strokeWidth: "0.7",
    fontSize: String(FONT_SIZE),
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT,
  }

  // Gradient radius: ~30% of viewBox width
  const gradR = vb.w * 0.3

  return (
    <svg
      ref={svgRef}
      width="100%"
      viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      /*
       * h-auto: browser derives height from viewBox aspect ratio.
       * display:block removes the default inline bottom gap.
       */
      className="block h-auto w-full select-none"
      style={{ display: "block" }}
      role="img"
    >
      <title>{text}</title>
      <defs>
        {/* Colorful gradient that fills the hovered text */}
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1={vb.x}
          y1={TY}
          x2={vb.x + vb.w}
          y2={TY}
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        {/* Radial mask that follows the cursor */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={gradR}
          initial={{ cx: TX, cy: TY }}
          animate={maskPos}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x={vb.x - 1000}
            y={vb.y - 1000}
            width={vb.w + 2000}
            height={vb.h + 2000}
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Invisible measurement ref with same font props */}
      <text ref={textRef} {...textProps} style={{ visibility: "hidden" }}>
        {text}
      </text>

      {/* Outline – dims in/out on hover */}
      <text
        {...textProps}
        className="fill-transparent stroke-neutral-600 dark:stroke-slate-700"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>

      {/* Animated draw-on stroke */}
      <motion.text
        {...textProps}
        className="fill-transparent stroke-neutral-600 dark:stroke-slate-700"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Colorful gradient revealed by cursor mask */}
      <text
        {...textProps}
        stroke="url(#textGradient)"
        mask="url(#textMask)"
        className="fill-transparent"
      >
        {text}
      </text>
    </svg>
  )
}
