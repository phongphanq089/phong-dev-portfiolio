import { Link } from "@tanstack/react-router"
import { MoveLeft, RotateCcw, SearchX } from "lucide-react"

export function NotFound({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
			{/* Icon minh họa */}
			<div className="mb-6 rounded-full bg-slate-100 p-6 dark:bg-slate-800">
				<SearchX className="h-16 w-16 text-slate-400" />
			</div>

			{/* Thông báo chính */}
			<h1 className="mb-2 text-6xl font-black tracking-tight text-slate-900 dark:text-white">
				404
			</h1>

			<div className="mb-8 max-w-md text-lg text-slate-600 dark:text-slate-400">
				{children || (
					<p>
						Rất tiếc! Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển
						sang một địa chỉ khác.
					</p>
				)}
			</div>

			{/* Nhóm nút điều hướng */}
			<div className="flex flex-col sm:flex-row items-center gap-4">
				<button
					type="button"
					onClick={() => window.history.back()}
					className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
				>
					<MoveLeft className="h-4 w-4" />
					Quay lại
				</button>

				<Link
					to="/"
					className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-700 active:scale-95"
				>
					<RotateCcw className="h-4 w-4" />
					Về trang chủ
				</Link>
			</div>

			<p className="mt-12 text-sm text-slate-400">
				Bạn có nghĩ đây là một lỗi từ phía chúng tôi?{" "}
				<Link
					to="/"
					className="underline decoration-emerald-500/30 underline-offset-4 hover:text-emerald-500"
				>
					Báo cáo ngay
				</Link>
			</p>
		</div>
	)
}
