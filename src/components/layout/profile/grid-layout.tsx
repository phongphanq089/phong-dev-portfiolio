import React from "react"

import { cn } from "@/lib/utils"

export const Crosshair = ({ className }: { className?: string }) => (
  <svg
    className={cn("absolute z-10 h-3 w-3 text-muted-foreground/30", className)}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 1V11M1 6H11"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)

interface GridSectionProps {
  children: React.ReactNode
  className?: string
  showCrosshairs?: boolean
  columns?: 1 | 2
  borderBottom?: boolean
  borderTop?: boolean
}

export function GridSection({
  children,
  className,
  showCrosshairs = true,
  columns = 1,
  borderBottom = true,
  borderTop = false,
}: GridSectionProps) {
  return (
    <section
      className={cn(
        "relative z-1",
        borderBottom && "border-b border-border",
        borderTop && "border-t border-border"
      )}
    >
      <div
        className={cn(
          "relative mx-auto h-full max-w-5xl border-r border-l border-border",
          columns === 2 && "grid grid-cols-1 md:grid-cols-2",
          className
        )}
      >
        {columns === 2 && (
          <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" />
        )}

        {showCrosshairs && borderBottom && (
          <>
            <Crosshair className="bottom-[-6px] left-[-6px]" />
            <Crosshair className="right-[-6px] bottom-[-6px]" />
            {columns === 2 && (
              <Crosshair className="bottom-[-6px] left-1/2 -translate-x-1/2" />
            )}
          </>
        )}

        {showCrosshairs && borderTop && (
          <>
            <Crosshair className="top-[-6px] left-[-6px]" />
            <Crosshair className="top-[-6px] right-[-6px]" />
            {columns === 2 && (
              <Crosshair className="top-[-6px] left-1/2 -translate-x-1/2" />
            )}
          </>
        )}

        {children}
      </div>
    </section>
  )
}
