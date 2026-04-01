import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_admin/dashboard")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
			<h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
			<p className="text-gray-500">
				Chào mừng bạn đến với giao diện Admin! Trang này hiện đang sử dụng một
				Layout hoàn toàn khác với website chính (có Sidebar và nền xám).
			</p>
		</div>
	)
}
