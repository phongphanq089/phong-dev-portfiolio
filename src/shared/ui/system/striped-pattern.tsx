import React from "react"

import { cn } from "@/shared/lib/utils"

export interface StripedPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  /**
   * Layout variant:
   * - "absolute" | "full": fills parent container completely (absolute inset-0 pointer-events-none)
   * - "inline": flexible filler in flex rows (min-w-[24px] flex-1)
   */
  variant?: "inline" | "absolute" | "full"
  /** Line spacing / grid tile size in pixels (default: 10) */
  size?: number
  /** Orientation angle of the striped lines (default: "diagonal" -> 315deg) */
  orientation?: "diagonal" | "horizontal" | "vertical"
  /** Custom line color token override */
  color?: string
}

/**
 * Precision Blueprint Striped Pattern & Scale Markers.
 * Employs 1px vector repeating gradient mathematics with CSS custom properties
 * from the Scales & Ruler system for razor-sharp, pixel-perfect hatching across light and dark modes.
 */
export function StripedPattern({
  className,
  variant = "inline",
  size = 10,
  orientation = "diagonal",
  color,
  style,
  ...props
}: StripedPatternProps) {
  const getGradientAngle = () => {
    switch (orientation) {
      case "horizontal":
        return "0deg"
      case "vertical":
        return "90deg"
      case "diagonal":
      default:
        return "315deg"
    }
  }

  return (
    <div
      className={cn(
        "overflow-hidden",
        "[--pattern-stripes:var(--color-neutral-950)]/8",
        "dark:[--pattern-stripes:var(--color-white)]/10",
        (variant === "absolute" || variant === "full") &&
          "pointer-events-none absolute inset-0 h-full w-full",
        variant === "inline" && "min-w-[24px] flex-1",
        className
      )}
      style={
        {
          "--stripes-size": `${size}px`,
          "--stripes-angle": getGradientAngle(),
          ...(color && { "--pattern-stripes": color }),
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className="h-full w-full bg-[repeating-linear-gradient(var(--stripes-angle),var(--pattern-stripes)_0,var(--pattern-stripes)_1px,transparent_0,transparent_50%)]"
        style={{
          backgroundSize: `var(--stripes-size) var(--stripes-size)`,
        }}
      />
    </div>
  )
}
