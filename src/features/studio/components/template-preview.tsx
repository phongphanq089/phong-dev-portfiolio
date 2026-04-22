import { Loader2 } from "lucide-react"
import { lazy, Suspense } from "react"

interface TemplatePreviewProps {
	componentName: string
}

// Vite yêu cầu import.meta.glob khi dùng dynamic import với biến
// Đây là cách duy nhất Vite có thể bundle đúng cả client lẫn SSR
const componentModules = import.meta.glob<{ default: React.ComponentType }>(
	"./*.tsx",
)

/**
 * Component này là cầu nối SSR - Client.
 * Nó dùng lazy và Suspense để nạp các component animation nặng mà không gây lỗi Hydration.
 */
export default function TemplatePreview({
	componentName,
}: TemplatePreviewProps) {
	const moduleKey = `./${componentName}.tsx`
	const loader = componentModules[moduleKey]

	if (!loader) {
		return (
			<div className="group relative rounded-3xl border border-red-800 bg-red-900/20 p-4">
				<p className="text-red-400 text-sm">Component không tìm thấy: {componentName}</p>
			</div>
		)
	}

	const Component = lazy(loader)

	return (
		<div className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 p-4 transition-all hover:bg-slate-900/60 shadow-lg">
			<div className="mb-4 flex items-center justify-between px-2">
				<h3 className="text-sm font-semibold text-slate-400 capitalize">
					{componentName.replace("-", " ")}
				</h3>
				<span className="rounded-full bg-indigo-500/10 px-2 py-1 text-[10px] font-bold text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
					Interactive
				</span>
			</div>

			<div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/50 flex items-center justify-center">
				<Suspense
					fallback={
						<div className="flex flex-col items-center gap-2 text-slate-500">
							<Loader2 className="h-6 w-6 animate-spin text-indigo-500" />
							<span className="text-xs font-medium animate-pulse">
								Loading Animation...
							</span>
						</div>
					}
				>
					<Component />
				</Suspense>
			</div>
		</div>
	)
}
