import { Suspense, lazy } from "react"
import { Loader2 } from "lucide-react"

interface TemplatePreviewProps {
  componentName: string
}

/**
 * Component này là cầu nối SSR - Client.
 * Nó dùng lazy và Suspense để nạp các component animation nặng mà không gây lỗi Hydration.
 */
export default function TemplatePreview({ componentName }: TemplatePreviewProps) {
  // Nạp động dựa trên tên file
  const Component = lazy(() => import(`./${componentName}.tsx`))

  return (
    <div className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-4 transition-all hover:bg-slate-900/60 shadow-lg">
      <div className="mb-4 flex items-center justify-between px-2">
        <h3 className="text-sm font-semibold text-slate-400 capitalize">{componentName.replace('-', ' ')}</h3>
        <span className="rounded-full bg-indigo-500/10 px-2 py-1 text-[10px] font-bold text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
          Interactive
        </span>
      </div>
      
      <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/50 flex items-center justify-center">
        <Suspense fallback={
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <Loader2 className="h-6 w-6 animate-spin text-indigo-500" />
            <span className="text-xs font-medium animate-pulse">Loading Animation...</span>
          </div>
        }>
          <Component />
        </Suspense>
      </div>
    </div>
  )
}
