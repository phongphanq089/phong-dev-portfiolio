import React from "react"

import { cn } from "@/shared/lib/utils"

export interface PPPixelMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
  className?: string
  color?: string
  variant?: "solid" | "glow" | "outline"
  withBackground?: boolean
}

/**
 * Phong Phan (PP) 8-Bit Pixel Mark
 * Recreated with precision pixel geometry from 8-bit stepped glyph style
 */
export function PPPixelMark({
  size = 48,
  className,
  color = "currentColor",
  variant = "solid",
  withBackground = false,
  ...props
}: PPPixelMarkProps) {
  // P1 Path: Starts at x=8, y=8
  const p1Path =
    "M8,8 H34 V16 H44 V34 H34 V42 H18 V56 H8 Z M18,20 H34 V30 H18 Z"

  // P2 Path: Starts at x=52, y=8
  const p2Path =
    "M52,8 H78 V16 H88 V34 H78 V42 H62 V56 H52 Z M62,20 H78 V30 H62 Z"

  return (
    <svg
      viewBox="0 0 96 64"
      width={size}
      height={typeof size === "number" ? (size * 64) / 96 : size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "inline-block shrink-0 transition-all duration-300",
        variant === "glow" && "drop-shadow-[0_0_12px_var(--pp-primary)]",
        className
      )}
      {...props}
    >
      {withBackground && (
        <rect
          width="96"
          height="64"
          rx="6"
          className="fill-zinc-950 stroke-border/40"
        />
      )}

      <g>
        {/* First P */}
        <path
          d={p1Path}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          className={cn(
            variant === "outline"
              ? "fill-transparent stroke-current stroke-2"
              : "fill-current"
          )}
        />
        {/* Second P */}
        <path
          d={p2Path}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          className={cn(
            variant === "outline"
              ? "fill-transparent stroke-current stroke-2"
              : "fill-current"
          )}
        />
      </g>
    </svg>
  )
}

export default PPPixelMark
