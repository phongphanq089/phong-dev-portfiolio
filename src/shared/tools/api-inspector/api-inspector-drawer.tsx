import { Clock, Copy, Database, Terminal, Trash2, X } from "lucide-react"
import { useState } from "react"

import { cn } from "@/shared/lib/utils"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/ui/core/drawer"

import { useApiInspector } from "./api-inspector-context"
import { JsonViewer } from "./json-viewer"
import type { HttpMethod, HttpStatus } from "./types"

function getMethodBadge(method?: HttpMethod) {
  switch (method) {
    case "POST":
      return "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30"
    case "PUT":
    case "PATCH":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30"
    case "DELETE":
      return "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30"
    case "GROQ":
    case "QUERY":
      return "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30"
    case "GET":
    default:
      return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
  }
}

function getStatusBadge(status?: HttpStatus) {
  const s = String(status || "200")
  if (s.startsWith("2") || s === "success") {
    return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
  }
  if (s.startsWith("4") || s.startsWith("5") || s === "error") {
    return "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30"
  }
  return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
}

export function ApiInspectorDrawer() {
  const {
    isOpen,
    setIsOpen,
    entries,
    activeEntry,
    setActiveEntryId,
    removeEntry,
    clearEntries,
  } = useApiInspector()

  const [copiedUrl, setCopiedUrl] = useState(false)

  const handleCopyEndpoint = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedUrl(true)
      setTimeout(() => setCopiedUrl(false), 2000)
    } catch (err) {
      console.error("Failed to copy endpoint:", err)
    }
  }

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="fixed inset-y-0 right-0 z-50 flex h-full flex-col border-l border-border/80 bg-background/95 backdrop-blur-xl data-[vaul-drawer-direction=right]:w-[95vw] data-[vaul-drawer-direction=right]:sm:max-w-xl data-[vaul-drawer-direction=right]:md:max-w-2xl data-[vaul-drawer-direction=right]:lg:max-w-3xl">
        {/* Drawer Header */}
        <DrawerHeader className="border-b border-border/70 px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary shadow-xs">
                <Terminal className="size-4" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <DrawerTitle className="font-mono text-sm font-bold tracking-tight text-foreground sm:text-base">
                    API RESPONSIVE INSPECTOR
                  </DrawerTitle>
                  <span className="py-0.2 rounded-xs border border-primary/30 bg-primary/10 px-1.5 font-mono text-[10px] font-medium text-primary">
                    DEV TOOL
                  </span>
                </div>
                <DrawerDescription className="font-mono text-[11px] text-muted-foreground">
                  Inspect incoming payload, headers, latency & JSON structure
                  without console.log
                </DrawerDescription>
              </div>
            </div>

            {/* Actions: Clear all & Close */}
            <div className="flex items-center gap-2">
              {entries.length > 0 && (
                <button
                  type="button"
                  onClick={clearEntries}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border/70 bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive active:scale-95"
                  title="Clear all API entries"
                >
                  <Trash2 className="size-3" />
                  <span className="hidden sm:inline">Clear All</span>
                </button>
              )}

              <DrawerClose asChild>
                <button
                  type="button"
                  className="inline-flex size-7 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </DrawerClose>
            </div>
          </div>

          {/* Horizontal API Tabs */}
          {entries.length > 0 && (
            <div className="mt-3 no-scrollbar flex w-full items-center gap-1.5 overflow-x-auto border-t border-border/40 pt-2.5">
              {entries.map((entry) => {
                const isActive = activeEntry?.id === entry.id
                return (
                  <div
                    key={entry.id}
                    onClick={() => setActiveEntryId(entry.id)}
                    className={cn(
                      "group flex shrink-0 cursor-pointer items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-xs transition-all select-none",
                      isActive
                        ? "border-primary/50 bg-primary/10 text-primary shadow-xs"
                        : "border-border/70 bg-card/60 text-muted-foreground hover:border-border hover:bg-accent/70 hover:text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "py-0.2 rounded-xs border px-1 text-[9px] font-semibold tracking-wider uppercase",
                        getMethodBadge(entry.method)
                      )}
                    >
                      {entry.method || "GET"}
                    </span>

                    <span className="max-w-[130px] truncate font-medium sm:max-w-[180px]">
                      {entry.title}
                    </span>

                    {entry.status && (
                      <span
                        className={cn(
                          "py-0.2 rounded-xs border px-1 text-[9px] font-medium",
                          getStatusBadge(entry.status)
                        )}
                      >
                        {entry.status}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeEntry(entry.id)
                      }}
                      className="ml-1 rounded p-0.5 text-muted-foreground/60 hover:bg-muted hover:text-foreground"
                      title="Remove tab"
                    >
                      <X className="size-2.5" />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </DrawerHeader>

        {/* Drawer Main Body */}
        {/* Drawer Scrollable Content */}
        <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-4 sm:px-6">
          {activeEntry ? (
            <div className="space-y-4">
              {/* Endpoint Meta Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-lg border border-border/80 bg-card/40 p-3">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span
                    className={cn(
                      "rounded-xs border px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase",
                      getMethodBadge(activeEntry.method)
                    )}
                  >
                    {activeEntry.method || "GET"}
                  </span>

                  <code className="truncate font-mono text-xs text-foreground select-all">
                    {activeEntry.endpoint}
                  </code>

                  <button
                    type="button"
                    onClick={() => handleCopyEndpoint(activeEntry.endpoint)}
                    className="inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded border border-border/70 bg-background text-muted-foreground hover:bg-accent hover:text-foreground"
                    title="Copy Endpoint"
                  >
                    {copiedUrl ? (
                      <span className="text-[9px] text-emerald-500">OK</span>
                    ) : (
                      <Copy className="size-3" />
                    )}
                  </button>
                </div>

                {/* Badges: Status, Latency, Timestamp */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  {activeEntry.status && (
                    <span
                      className={cn(
                        "inline-flex items-center rounded-xs border px-1.5 py-0.5 font-medium",
                        getStatusBadge(activeEntry.status)
                      )}
                    >
                      Status: {activeEntry.status}
                    </span>
                  )}

                  {activeEntry.durationMs !== undefined && (
                    <span className="inline-flex items-center gap-1 rounded-xs border border-border bg-background px-1.5 py-0.5 text-muted-foreground">
                      <Clock className="size-3" />
                      {activeEntry.durationMs} ms
                    </span>
                  )}

                  {activeEntry.timestamp && (
                    <span className="rounded-xs border border-border bg-background px-1.5 py-0.5 text-muted-foreground">
                      {activeEntry.timestamp}
                    </span>
                  )}
                </div>
              </div>

              {/* JSON Viewer Card */}
              <JsonViewer
                data={activeEntry.data}
                title={activeEntry.title}
                className="w-full"
              />
            </div>
          ) : (
            /* Empty State */
            <div className="flex min-h-[260px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border p-8 text-center">
              <div className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/30 text-muted-foreground">
                <Database className="size-5" />
              </div>
              <h3 className="font-mono text-sm font-semibold text-foreground">
                No API Requests Inspected Yet
              </h3>
              <p className="max-w-md font-mono text-xs text-muted-foreground">
                Trigger an API request or click on any &ldquo;Inspect API&rdquo;
                button in the app to inspect its payload, latency, and
                structure.
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <DrawerFooter className="border-t border-border/70 px-4 py-3 sm:px-6">
          <div className="flex w-full items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="inline-flex size-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="hidden sm:inline">Hotkey:</span>
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] text-foreground">
                Ctrl + Shift + A
              </kbd>
            </div>

            <DrawerClose asChild>
              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:bg-accent active:scale-95"
              >
                Close Drawer
              </button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
