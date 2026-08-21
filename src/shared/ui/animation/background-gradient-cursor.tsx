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
  radius?: number | string
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
      position = "absolute",
      gradient = {},
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
    const [isVisible, setIsVisible] = useState(false)
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      setRef(forwardedRef, backgroundRef.current)
    }, [forwardedRef])

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        if (backgroundRef.current) {
          const rect = backgroundRef.current.getBoundingClientRect()
          const isInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom

          if (position === "fixed" || isInside) {
            setIsVisible(true)
            setCursorPosition({
              x: event.clientX - rect.left,
              y: event.clientY - rect.top,
            })
          } else {
            setIsVisible(false)
          }
        }
      }

      const handleMouseLeave = () => setIsVisible(false)
      const handleMouseEnter = () => setIsVisible(true)

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseleave", handleMouseLeave)
      document.addEventListener("mouseenter", handleMouseEnter)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseleave", handleMouseLeave)
        document.removeEventListener("mouseenter", handleMouseEnter)
      }
    }, [position])

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

      if (mask.cursor) {
        animationFrameId = requestAnimationFrame(updateSmoothPosition)
      }
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

      const radiusUnit =
        typeof mask.radius === "number"
          ? `${mask.radius}px`
          : mask.radius || (position === "fixed" ? "50vh" : "150px")

      if (mask.cursor) {
        return {
          "--mask-position-x": `${smoothPosition.x}px`,
          "--mask-position-y": `${smoothPosition.y}px`,
          "--mask-radius": radiusUnit,
          "--mask-gradient": gradient,
        } as CSSProperties
      }

      if (mask.x != null && mask.y != null) {
        return {
          "--mask-position-x": `${mask.x}%`,
          "--mask-position-y": `${mask.y}%`,
          "--mask-radius": radiusUnit,
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

        {dots.display && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: dots.opacity ? dots.opacity / 100 : 0.3,
              backgroundSize: "20px 20px",
              backgroundImage: `radial-gradient(var(--${dots.color || "foreground"}) ${dots.size || 1}px, transparent ${dots.size || 1}px)`,
            }}
          />
        )}

        {mask.cursor && (
          <div
            className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden"
            style={{
              ...maskStyle(),
              background: "var(--mask-gradient)",
              pointerEvents: "none",
              filter: "blur(40px)",
              mixBlendMode: "lighten",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.4s ease-out",
            }}
          />
        )}

        {children}
      </div>
    )
  }
)

export default BackgroundGradientCursor
