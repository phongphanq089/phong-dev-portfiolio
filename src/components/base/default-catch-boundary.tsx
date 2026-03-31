import type { ErrorComponentProps } from "@tanstack/react-router"
import {
	ErrorComponent,
	Link,
	rootRouteId,
	useMatch,
	useRouter,
} from "@tanstack/react-router"
import { AlertTriangle, ChevronLeft, Home, RefreshCw } from "lucide-react"

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
	const router = useRouter()
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	})

	console.error(error)

	return (
		<div className="flex min-h-[400px] flex-1 flex-col items-center justify-center p-6 text-center">
			{/* Icon cảnh báo với hiệu ứng rung nhẹ */}
			<div className="mb-6 rounded-full bg-red-50 p-6 dark:bg-red-900/20">
				<AlertTriangle className="h-12 w-12 text-red-500" />
			</div>

			<h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
				Đã có lỗi xảy ra!
			</h2>

			{/* Hiển thị chi tiết lỗi một cách tinh tế */}
			<div className="mb-8 max-w-md">
				<div className="rounded-lg bg-slate-50 p-4 text-left text-sm font-mono text-slate-600 dark:bg-slate-900 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
					<ErrorComponent error={error} />
				</div>
			</div>

			<div className="flex flex-wrap items-center justify-center gap-3">
				{/* Nút Thử lại (Invalidate router để fetch lại dữ liệu) */}
				<button
					type="button"
					onClick={() => {
						router.invalidate()
					}}
					className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-700 active:scale-95 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
				>
					<RefreshCw className="h-4 w-4" />
					Thử lại
				</button>

				{isRoot ? (
					<Link
						to="/"
						className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
					>
						<Home className="h-4 w-4" />
						Về trang chủ
					</Link>
				) : (
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault()
							window.history.back()
						}}
						className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
					>
						<ChevronLeft className="h-4 w-4" />
						Quay lại
					</button>
				)}
			</div>
		</div>
	)
}
