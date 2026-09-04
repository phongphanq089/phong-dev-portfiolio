import {
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Download,
  Search,
  X,
} from "lucide-react"
import React, { useMemo, useState } from "react"

import { cn } from "@/shared/lib/utils"
import { ScrollFadeEffect } from "@/shared/ui/core/scroll-fade-effect"

interface JsonViewerProps {
  data: unknown
  title?: string
  className?: string
}

function formatBytes(bytes?: number): string {
  if (!bytes || bytes === 0) return "0 B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

function getByteSize(data: unknown): number {
  try {
    const str = JSON.stringify(data)
    return new Blob([str]).size
  } catch {
    return 0
  }
}

// Interactive collapsible JSON tree node
interface JsonNodeProps {
  name?: string
  value: unknown
  isLast?: boolean
  searchQuery?: string
  depth?: number
  defaultExpandedDepth?: number
}

function JsonNode({
  name,
  value,
  isLast = true,
  searchQuery = "",
  depth = 0,
  defaultExpandedDepth = 2,
}: JsonNodeProps) {
  const [isOpen, setIsOpen] = useState(depth < defaultExpandedDepth)

  const isObject = value !== null && typeof value === "object"
  const isArray = Array.isArray(value)

  // Highlight search text
  const renderHighlighted = (text: string) => {
    if (!searchQuery) return text
    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"))
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark
              key={i}
              className="rounded-xs bg-yellow-400/30 px-0.5 text-yellow-300 dark:bg-yellow-500/30 dark:text-yellow-200"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    )
  }

  // Primitive render
  if (!isObject) {
    let valueElement: React.ReactNode

    if (value === null) {
      valueElement = (
        <span className="font-semibold text-rose-500 dark:text-rose-400">
          null
        </span>
      )
    } else if (typeof value === "boolean") {
      valueElement = (
        <span className="font-semibold text-purple-600 dark:text-purple-400">
          {value ? "true" : "false"}
        </span>
      )
    } else if (typeof value === "number") {
      valueElement = (
        <span className="text-amber-600 dark:text-amber-400">
          {renderHighlighted(String(value))}
        </span>
      )
    } else if (typeof value === "string") {
      valueElement = (
        <span className="text-emerald-600 dark:text-emerald-400">
          &quot;{renderHighlighted(value)}&quot;
        </span>
      )
    } else {
      valueElement = (
        <span className="text-muted-foreground">{String(value)}</span>
      )
    }

    return (
      <div className="text-xs leading-5 hover:bg-muted/30">
        <span style={{ paddingLeft: `${depth * 16}px` }} />
        {name !== undefined && (
          <span className="text-sky-700 dark:text-sky-300">
            &quot;{renderHighlighted(name)}&quot;:{" "}
          </span>
        )}
        {valueElement}
        {!isLast && <span className="text-muted-foreground">,</span>}
      </div>
    )
  }

  const entries = isArray
    ? (value as unknown[]).map((v, i) => [String(i), v] as const)
    : Object.entries(value as Record<string, unknown>)

  const itemsCount = entries.length
  const opening = isArray ? "[" : "{"
  const closing = isArray ? "]" : "}"

  return (
    <div className="text-xs leading-5">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center gap-1 rounded-xs hover:bg-muted/40"
        style={{ paddingLeft: `${depth * 16}px` }}
      >
        <button
          type="button"
          className="flex size-4 items-center justify-center text-muted-foreground transition-transform"
        >
          {isOpen ? (
            <ChevronDown className="size-3" />
          ) : (
            <ChevronRight className="size-3" />
          )}
        </button>

        {name !== undefined && (
          <span className="text-sky-700 dark:text-sky-300">
            &quot;{renderHighlighted(name)}&quot;:{" "}
          </span>
        )}

        <span className="text-muted-foreground">{opening}</span>

        {!isOpen && (
          <span className="text-[10px] text-muted-foreground/60">
            {" "}
            ... {itemsCount} {itemsCount === 1 ? "item" : "items"}{" "}
          </span>
        )}

        {!isOpen && <span className="text-muted-foreground">{closing}</span>}
        {!isOpen && !isLast && <span className="text-muted-foreground">,</span>}
      </div>

      {isOpen && (
        <div>
          {entries.map(([childKey, childVal], index) => (
            <JsonNode
              key={childKey}
              name={isArray ? undefined : childKey}
              value={childVal}
              isLast={index === entries.length - 1}
              searchQuery={searchQuery}
              depth={depth + 1}
              defaultExpandedDepth={defaultExpandedDepth}
            />
          ))}
          <div
            className="text-muted-foreground hover:bg-muted/30"
            style={{ paddingLeft: `${depth * 16}px` }}
          >
            <span className="inline-block w-4" />
            {closing}
            {!isLast && ","}
          </div>
        </div>
      )}
    </div>
  )
}

export function JsonViewer({
  data,
  title = "response",
  className,
}: JsonViewerProps) {
  const [copied, setCopied] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"tree" | "raw">("tree")
  const [expandKey, setExpandKey] = useState(0)

  const formattedJson = useMemo(() => {
    try {
      return JSON.stringify(data, null, 2)
    } catch {
      return String(data)
    }
  }, [data])

  const size = useMemo(() => getByteSize(data), [data])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedJson)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy JSON:", err)
    }
  }

  const handleDownload = () => {
    try {
      const blob = new Blob([formattedJson], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-response.json`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error("Failed to download JSON:", err)
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-border bg-card/60 shadow-xs backdrop-blur-xs",
        className
      )}
    >
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/40 px-3 py-2 text-xs">
        {/* Left: View Mode Toggle & Search */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md border border-border bg-background p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("tree")}
              className={cn(
                "cursor-pointer rounded px-2 py-1 text-[11px] font-medium transition-colors",
                viewMode === "tree"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Tree View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("raw")}
              className={cn(
                "cursor-pointer rounded px-2 py-1 text-[11px] font-medium transition-colors",
                viewMode === "raw"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Raw JSON
            </button>
          </div>

          {viewMode === "tree" && (
            <button
              type="button"
              onClick={() => setExpandKey((prev) => prev + 1)}
              className="cursor-pointer rounded border border-border/80 bg-background/80 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:border-border hover:bg-accent hover:text-foreground"
              title="Toggle expand/collapse"
            >
              Reset Tree
            </button>
          )}

          {/* Search Input */}
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-2 size-3 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keys & values..."
              className="h-7 w-36 rounded-md border border-border/80 bg-background pr-6 pl-7 text-[11px] text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:ring-1 focus:ring-ring focus:outline-none sm:w-48"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-1.5 flex size-4 items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <X className="size-3" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Size stats + Actions */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground">
            Size:{" "}
            <strong className="text-foreground">{formatBytes(size)}</strong>
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex cursor-pointer items-center gap-1 rounded border border-border/80 bg-background px-2.5 py-1 text-[11px] text-muted-foreground shadow-xs transition-colors hover:border-border hover:bg-accent hover:text-foreground active:scale-95"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-500" />
                <span className="text-emerald-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex cursor-pointer items-center gap-1 rounded border border-border/80 bg-background px-2.5 py-1 text-[11px] text-muted-foreground shadow-xs transition-colors hover:border-border hover:bg-accent hover:text-foreground active:scale-95"
            title="Download JSON File"
          >
            <Download className="size-3" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* JSON Content Area */}
      <ScrollFadeEffect className="max-h-[500px] min-h-[160px] p-3 text-left">
        {viewMode === "tree" ? (
          <div key={expandKey} className="space-y-0.5">
            <JsonNode
              value={data}
              searchQuery={searchQuery}
              defaultExpandedDepth={2}
            />
          </div>
        ) : (
          <pre className="text-xs leading-relaxed text-foreground select-text">
            <code>{formattedJson}</code>
          </pre>
        )}
      </ScrollFadeEffect>
    </div>
  )
}
