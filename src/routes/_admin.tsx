import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_admin")({
	component: AdminLayout,
	ssr: false, // Vô hiệu hóa SSR cho toàn bộ các trang quản trị
})

function AdminLayout() {
	return (
		<div className="flex h-screen overflow-hidden bg-gray-100">
			{/* Sidebar Demo */}
			<aside className="w-64 border-r bg-white p-6 shadow-sm">
				<h2 className="mb-8 text-xl font-bold uppercase tracking-wider text-gray-400">
					Admin Panel
				</h2>
				<nav className="flex flex-col gap-2">
					<Link
						to="/dashboard"
						className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 [&.active]:bg-indigo-50 [&.active]:text-indigo-600"
					>
						Dashboard
					</Link>
					<Link
						to="/"
						className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
					>
						Back to Site
					</Link>
				</nav>
			</aside>

			{/* Main Content Area */}
			<main className="flex-1 overflow-auto p-10">
				<div className="mx-auto max-w-5xl">
					<Outlet />
				</div>
			</main>
		</div>
	)
}
