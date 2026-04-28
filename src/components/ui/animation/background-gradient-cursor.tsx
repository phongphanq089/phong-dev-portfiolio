import classNames from "classnames"
import type React from "react"
import {
  type CSSProperties,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react"

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") {
    ref(value)
  } else if (ref && "current" in ref) {
    ;(ref as React.MutableRefObject<T | null>).current = value
  }
}

interface MaskProps {
  cursor?: boolean
  x?: number
  y?: number
  radius?: number
}

interface GradientProps {
  display?: boolean
  opacity?: number
  x?: number
  y?: number
  width?: number
  height?: number
  tilt?: number
  colorStart?: string
  colorEnd?: string
}

interface DotsProps {
  display?: boolean
  opacity?: number
  color?: string
  size?: number
}

interface GridProps {
  display?: boolean
  opacity?: number
  color?: string
  width?: string
  height?: string
}

interface LinesProps {
  display?: boolean
  opacity?: number
  size?: number
}

interface BackgroundProps {
  position?: CSSProperties["position"]
  gradient?: GradientProps
  dots?: DotsProps
  grid?: GridProps
  lines?: LinesProps
  mask?: MaskProps
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const BackgroundGradientCursor = forwardRef<HTMLDivElement, BackgroundProps>(
  (
    {
      position = "fixed",
      gradient = {},
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      dots = {},
      grid = {},
      lines = {},
      mask = {},
      children,
      className,
      style,
      ...rest
    },
    forwardedRef
  ) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      setRef(forwardedRef, backgroundRef.current)
    }, [forwardedRef])

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        if (backgroundRef.current) {
          const rect = backgroundRef.current.getBoundingClientRect()
          setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          })
        }
      }

      document.addEventListener("mousemove", handleMouseMove)
      return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
      let animationFrameId: number
      const updateSmoothPosition = () => {
        setSmoothPosition((prev) => {
          const dx = cursorPosition.x - prev.x
          const dy = cursorPosition.y - prev.y
          const easingFactor = 0.1
          return {
            x: Math.round(prev.x + dx * easingFactor),
            y: Math.round(prev.y + dy * easingFactor),
          }
        })
        animationFrameId = requestAnimationFrame(updateSmoothPosition)
      }

      if (mask.cursor)
        animationFrameId = requestAnimationFrame(updateSmoothPosition)
      return () => cancelAnimationFrame(animationFrameId)
    }, [cursorPosition, mask])

    const maskStyle = (): CSSProperties => {
      if (!mask) return {}

      const gradient = `radial-gradient(
          circle at var(--mask-position-x) var(--mask-position-y),
          rgba(14, 164, 52, 0.5) 0%,
          rgba(14, 164, 52, 0.02) 50%,
          rgba(14, 164, 52, 0.05) 30%,
          rgba(255, 60, 0, 0) 70%
        )`

      if (mask.cursor) {
        return {
          "--mask-position-x": `${smoothPosition.x}px`,
          "--mask-position-y": `${smoothPosition.y}px`,
          "--mask-radius": `${mask.radius || 50}vh`,
          "--mask-gradient": gradient,
        } as CSSProperties
      }

      if (mask.x != null && mask.y != null) {
        return {
          "--mask-position-x": `${mask.x}%`,
          "--mask-position-y": `${mask.y}%`,
          "--mask-radius": `${mask.radius || 50}vh`,
          "--mask-gradient": gradient,
        } as CSSProperties
      }

      return {}
    }
    return (
      <div
        ref={backgroundRef}
        className={classNames(
          "pointer-events-none absolute inset-0 z-0 overflow-hidden",
          className
        )}
        style={{ position, ...style }}
        {...rest}
      >
        {gradient.display && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: gradient.opacity ? gradient.opacity / 100 : 0.5,
              background: `linear-gradient(${gradient.tilt || 0}deg, var(--${gradient.colorStart}) 0%, var(--${gradient.colorEnd}) 100%)`,
            }}
          />
        )}

        {lines.display && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: lines.opacity ? lines.opacity / 100 : 1,
              backgroundImage: `repeating-linear-gradient(45deg, var(--brand-on-background-weak) 0px, var(--brand-on-background-weak) 0.5px, transparent 0.5px, transparent ${lines.size}px)`,
            }}
          />
        )}

        {grid.display && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: grid.opacity ? grid.opacity / 100 : 1,
              backgroundSize: `${grid.width || "32px"} ${grid.height || "32px"}`,
              backgroundImage: `
                linear-gradient(to right, var(--${grid.color}) 1px, transparent 1px),
                linear-gradient(to bottom, var(--${grid.color}) 1px, transparent 1px)
              `,
            }}
          />
        )}

        {mask.cursor && (
          <div
            ref={backgroundRef}
            className="absolute top-0 left-0 z-[-1] h-full w-full overflow-hidden"
            style={{
              ...maskStyle(),
              background: "var(--mask-gradient)",
              pointerEvents: "none",
              filter: "blur(40px)",
              mixBlendMode: "lighten",
            }}
          />
        )}

        {children}
      </div>
    )
  }
)
export default BackgroundGradientCursor
