import { RefreshCw, Terminal } from "lucide-react"
import React, { useMemo } from "react"

import { cn } from "@/shared/lib/utils"
import { Badge } from "@/shared/ui/core/badge"
import { Button } from "@/shared/ui/core/button"
import { Kbd } from "@/shared/ui/core/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/ui/core/tooltip"

import { useApiInspector } from "./api-inspector-context"
import type { ApiEntry } from "./types"

/**
 * Global Floating Dev Tool Button
 * Shows a sleek developer HUD pill with count of logged APIs, active loading pulse,
 * and quick-opens the inspector drawer.
 */
export function DevApiInspectorFloatingTrigger({
  className,
}: {
  className?: string
}) {
  const { entries, isOpen, setIsOpen } = useApiInspector()

  const isAnyLoading = useMemo(() => {
    return entries.some((e) => e.isLoading)
  }, [entries])

  // Only render if there's window / browser
  if (typeof window === "undefined") return null

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "fixed bottom-5 left-5 z-40 h-8 gap-2 rounded-full border-border/80 bg-background/90 px-3 text-xs text-foreground shadow-lg backdrop-blur-md transition-all hover:border-primary/50 hover:bg-card hover:shadow-primary/10",
            isOpen && "border-primary/60 bg-primary/10 text-primary",
            className
          )}
        >
          <div className="flex size-4 items-center justify-center text-primary">
            {isAnyLoading ? (
              <RefreshCw className="size-3.5 animate-spin" />
            ) : (
              <Terminal className="size-3.5" />
            )}
          </div>

          <span className="hidden font-mono text-[11px] font-semibold tracking-wider sm:inline">
            API DEVTOOL
          </span>

          {entries.length > 0 && (
            <Badge
              variant="secondary"
              className="h-4.5 min-w-4.5 px-1 font-mono text-[10px] font-bold"
            >
              {entries.length}
            </Badge>
          )}

          {isAnyLoading && (
            <span className="size-2 animate-ping rounded-full bg-primary" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="flex items-center gap-1.5 text-xs"
      >
        <span>Toggle API Inspector</span>
        <Kbd>Ctrl + Shift + A</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}

/**
 * Local Inline Trigger Component
 * Drop this onto any card, table row, or button to immediately inspect or re-trigger a response in the drawer.
 * Supports passing either an existing `entry` or a `fetcher` function!
 */
export interface ApiInspectorTriggerProps extends React.ComponentProps<
  typeof Button
> {
  entry?: Omit<ApiEntry, "id"> & { id?: string }
  fetcher?: () => Promise<unknown> | unknown
  title?: string
  endpoint?: string
  children?: React.ReactNode
}

export function ApiInspectorTrigger({
  entry,
  fetcher,
  title = "API Response",
  endpoint,
  children,
  className,
  ...props
}: ApiInspectorTriggerProps) {
  const { inspect, register, setIsOpen } = useApiInspector()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    if (fetcher) {
      await register({
        title,
        endpoint: endpoint || title,
        fetcher,
        autoExecute: true,
      })
      setIsOpen(true)
    } else if (entry) {
      inspect(entry)
      setIsOpen(true)
    }

    props.onClick?.(e)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="xs"
      onClick={handleClick}
      className={cn(
        "h-6 gap-1.5 border-border/70 bg-card/60 text-xs text-muted-foreground shadow-2xs transition-colors hover:border-border hover:bg-accent hover:text-foreground",
        className
      )}
      {...props}
    >
      <Terminal className="size-3 text-primary" />
      <span className="whitespace-nowrap">{children || "Inspect API"}</span>
    </Button>
  )
}
