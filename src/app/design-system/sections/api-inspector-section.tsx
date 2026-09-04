import {
  Database,
  ExternalLink,
  Layers,
  Loader2,
  RefreshCw,
  Terminal,
} from "lucide-react"
import { useState } from "react"

import { cn } from "@/shared/lib/utils"
import {
  type ApiEntry,
  JsonViewer,
  useApiInspector,
} from "@/shared/tools/api-inspector"
import { Button } from "@/shared/ui/core/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/core/drawer"

interface EndpointDef {
  id: string
  title: string
  url: string
  description: string
  method: "GET" | "POST"
}

const DEMO_ENDPOINTS: EndpointDef[] = [
  {
    id: "jp-posts",
    title: "JSONPlaceholder Posts",
    url: "https://jsonplaceholder.typicode.com/posts?_limit=5",
    description: "Fetches list of articles with userId, title & body",
    method: "GET",
  },
  {
    id: "jp-users",
    title: "JSONPlaceholder Users",
    url: "https://jsonplaceholder.typicode.com/users?_limit=3",
    description: "Fetches user profiles with company, geo & contact info",
    method: "GET",
  },
  {
    id: "jp-comments",
    title: "JSONPlaceholder Comments",
    url: "https://jsonplaceholder.typicode.com/comments?_limit=4",
    description: "Fetches post comments with author email and message",
    method: "GET",
  },
  {
    id: "jp-todos",
    title: "JSONPlaceholder Todos",
    url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
    description: "Fetches task items with completion status flags",
    method: "GET",
  },
]

export function ApiInspectorSection() {
  const { openWithEntry, inspect, setIsOpen } = useApiInspector()

  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({})
  const [resultsMap, setResultsMap] = useState<Record<string, ApiEntry>>({})
  const [selectedEndpointId, setSelectedEndpointId] =
    useState<string>("jp-posts")
  const [batchLoading, setBatchLoading] = useState(false)

  // Fetch a single endpoint
  const handleFetchEndpoint = async (
    endpoint: EndpointDef,
    openDrawerAfter = false
  ) => {
    setLoadingMap((prev) => ({ ...prev, [endpoint.id]: true }))
    const start = performance.now()

    try {
      const res = await fetch(endpoint.url)
      const durationMs = Math.round(performance.now() - start)
      const data = await res.json()

      const entry: ApiEntry = {
        id: endpoint.id,
        title: endpoint.title,
        endpoint: endpoint.url,
        method: endpoint.method,
        status: res.status,
        durationMs,
        data,
        timestamp: new Date().toLocaleTimeString(),
        description: endpoint.description,
      }

      setResultsMap((prev) => ({ ...prev, [endpoint.id]: entry }))
      inspect(entry)

      if (openDrawerAfter) {
        openWithEntry(entry)
      }
    } catch (err) {
      const durationMs = Math.round(performance.now() - start)
      const errorEntry: ApiEntry = {
        id: endpoint.id,
        title: endpoint.title,
        endpoint: endpoint.url,
        method: endpoint.method,
        status: "error",
        durationMs,
        data: { error: String(err) },
        timestamp: new Date().toLocaleTimeString(),
      }
      setResultsMap((prev) => ({ ...prev, [endpoint.id]: errorEntry }))
      inspect(errorEntry)
    } finally {
      setLoadingMap((prev) => ({ ...prev, [endpoint.id]: false }))
    }
  }

  // Fetch all endpoints and open Drawer with all tabs
  const handleFetchAll = async () => {
    setBatchLoading(true)
    for (const ep of DEMO_ENDPOINTS) {
      await handleFetchEndpoint(ep, false)
    }
    setBatchLoading(false)
    setIsOpen(true)
  }

  const currentResult = resultsMap[selectedEndpointId]

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="rounded-xl border border-border/70 bg-card/40 p-5 backdrop-blur-xs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="rounded-xs border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">
                Interactive Dev Tool
              </span>
              <span className="text-xs text-muted-foreground">
                drawer.tsx + vaul + tabs
              </span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              API Responses Inspector Drawer
            </h3>
            <p className="max-w-3xl text-xs text-muted-foreground">
              Công cụ gỡ lỗi API trực quan thay thế cho{" "}
              <code className="rounded bg-muted px-1 py-0.5">console.log</code>.
              Các request được tổ chức thành các <strong>Tabs</strong>, hỗ trợ
              tô màu cú pháp JSON, đo latency (ms), tính dung lượng (KB), lọc từ
              khóa và sao chép 1-click.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleFetchAll}
              disabled={batchLoading}
              className="cursor-pointer text-xs"
            >
              {batchLoading ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" />
                  <span>Fetching All APIs...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="size-3.5 text-primary" />
                  <span>Fetch All (4 Tabs)</span>
                </>
              )}
            </Button>

            <Button
              type="button"
              size="sm"
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-xs"
            >
              <Terminal className="size-3.5" />
              <span>Open Drawer</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 4 Endpoints Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DEMO_ENDPOINTS.map((endpoint) => {
          const isLoading = Boolean(loadingMap[endpoint.id])
          const result = resultsMap[endpoint.id]
          const isSelected = selectedEndpointId === endpoint.id

          return (
            <div
              key={endpoint.id}
              onClick={() => setSelectedEndpointId(endpoint.id)}
              className={cn(
                "group relative flex cursor-pointer flex-col justify-between rounded-lg border p-4 transition-all select-none",
                isSelected
                  ? "border-primary/50 bg-primary/[0.04] shadow-xs"
                  : "border-border/70 bg-card/30 hover:border-border hover:bg-card/70"
              )}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-1">
                  <span className="rounded-xs border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                    {endpoint.method}
                  </span>

                  {result && (
                    <span className="py-0.2 rounded-xs border border-border bg-background px-1.5 text-[9px] text-muted-foreground">
                      {result.durationMs}ms
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground">
                    {endpoint.title}
                  </h4>
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">
                    {endpoint.description}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/40 pt-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFetchEndpoint(endpoint, false)
                  }}
                  disabled={isLoading}
                  className="inline-flex cursor-pointer items-center gap-1 text-[11px] font-medium text-primary hover:underline disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="size-3 animate-spin" />
                      <span>Fetching...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="size-3" />
                      <span>{result ? "Refetch" : "Fetch"}</span>
                    </>
                  )}
                </button>

                {result && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      openWithEntry(result)
                    }}
                    className="inline-flex cursor-pointer items-center gap-1 rounded border border-border/70 bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-accent hover:text-foreground"
                    title="Inspect in Drawer"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="size-2.5" />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Live Preview Console for Selected Endpoint */}
      <div className="space-y-3 rounded-xl border border-border/70 bg-card/20 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Database className="size-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">
              Live Preview:{" "}
              {DEMO_ENDPOINTS.find((e) => e.id === selectedEndpointId)?.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const ep = DEMO_ENDPOINTS.find(
                  (e) => e.id === selectedEndpointId
                )
                if (ep) handleFetchEndpoint(ep, false)
              }}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border/80 bg-background px-2.5 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <RefreshCw className="size-3" />
              <span>Fetch Now</span>
            </button>

            {currentResult && (
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => openWithEntry(currentResult)}
                className="cursor-pointer text-xs"
              >
                <Terminal className="size-3 text-primary" />
                <span>Open in Drawer</span>
              </Button>
            )}
          </div>
        </div>

        {/* JSON Viewer inline */}
        {currentResult ? (
          <JsonViewer
            data={currentResult.data}
            title={currentResult.title}
            className="w-full"
          />
        ) : (
          <div className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border p-6 text-center">
            <span className="text-xs text-muted-foreground">
              Click &ldquo;Fetch Now&rdquo; above or choose an endpoint to fetch
              live data from JSONPlaceholder
            </span>
            <button
              type="button"
              onClick={() => {
                const ep = DEMO_ENDPOINTS.find(
                  (e) => e.id === selectedEndpointId
                )
                if (ep) handleFetchEndpoint(ep, false)
              }}
              className="cursor-pointer text-xs font-semibold text-primary underline underline-offset-4"
            >
              Fetch{" "}
              {DEMO_ENDPOINTS.find((e) => e.id === selectedEndpointId)?.title}
            </button>
          </div>
        )}
      </div>

      {/* Standalone Right-Slide Drawer Demo (Requested Pattern) */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/30 p-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <Layers className="size-3.5 text-primary" />
            <span>Right-Slide Scrollable Drawer Pattern</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Hiển thị Drawer trượt từ bên phải sang (
            <code className="text-[11px] text-foreground">
              direction=&quot;right&quot;
            </code>
            ) với nội dung có thanh cuộn riêng biệt.
          </p>
        </div>

        <DrawerScrollableContent />
      </div>
    </div>
  )
}

export function DrawerScrollableContent() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="cursor-pointer text-xs">
          Open Right Drawer (Scrollable Demo)
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col border-l border-border/80 bg-background/95 backdrop-blur-xl data-[vaul-drawer-direction=right]:w-[90vw] data-[vaul-drawer-direction=right]:sm:max-w-md">
        <DrawerHeader className="border-b border-border/70 p-4">
          <DrawerTitle className="text-sm font-bold">Move Goal</DrawerTitle>
          <DrawerDescription className="text-xs text-muted-foreground">
            Set your daily activity goal and inspect scrollable content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-4 py-4 text-xs text-muted-foreground">
          {Array.from({ length: 8 }).map((_, index) => (
            <p
              key={index}
              className="rounded-md border border-border/60 bg-card/40 p-3 leading-relaxed"
            >
              <strong className="text-foreground">Entry #{index + 1}:</strong>{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          ))}
        </div>
        <DrawerFooter className="flex flex-row items-center justify-end gap-2 border-t border-border/70 p-4">
          <Button size="sm" className="cursor-pointer text-xs">
            Submit
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer text-xs"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
