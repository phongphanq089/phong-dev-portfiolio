import { Terminal } from "lucide-react"
import React from "react"

import { cn } from "@/shared/lib/utils"

import { useApiInspector } from "./api-inspector-context"
import type { ApiEntry } from "./types"

/**
 * Global Floating Dev Tool Button
 * Shows a compact badge with count of logged APIs and opens the inspector drawer.
 */
export function DevApiInspectorFloatingTrigger({
  className,
}: {
  className?: string
}) {
  const { entries, isOpen, setIsOpen } = useApiInspector()

  // Only render if there's window / browser
  if (typeof window === "undefined") return null

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "group fixed bottom-5 left-5 z-40 flex cursor-pointer items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-1.5 text-xs text-foreground shadow-lg backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:shadow-primary/10 active:scale-95",
        isOpen && "border-primary/60 bg-primary/10 text-primary",
        className
      )}
      title="Toggle API Inspector Drawer (Ctrl + Shift + A)"
    >
      <div className="flex size-4 items-center justify-center text-primary transition-transform group-hover:scale-110">
        <Terminal className="size-3.5" />
      </div>

      <span className="hidden text-[11px] font-semibold tracking-wider sm:inline">
        API DEVTOOL
      </span>

      {entries.length > 0 && (
        <span className="flex size-4.5 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
          {entries.length}
        </span>
      )}
    </button>
  )
}

/**
 * Local Inline Trigger Component
 * Drop this onto any card, table row, or button to immediately inspect a response in the drawer.
 */
interface ApiInspectorTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  entry: Omit<ApiEntry, "id"> & { id?: string }
  children?: React.ReactNode
}

export function ApiInspectorTrigger({
  entry,
  children,
  className,
  ...props
}: ApiInspectorTriggerProps) {
  const { inspect, setIsOpen } = useApiInspector()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    inspect(entry)
    setIsOpen(true)
    props.onClick?.(e)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border/70 bg-card/60 px-2.5 py-1 text-xs text-muted-foreground shadow-xs transition-colors hover:border-border hover:bg-accent hover:text-foreground active:scale-95",
        className
      )}
      {...props}
    >
      <Terminal className="size-3 text-primary" />
      <span>{children || "Inspect API"}</span>
    </button>
  )
}
