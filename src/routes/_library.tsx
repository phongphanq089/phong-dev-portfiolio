import { createFileRoute, Link, Outlet } from "@tanstack/react-router"
import { Box, Code, Layers, MousePointer2, Palette } from "lucide-react"

export const Route = createFileRoute("/_library")({
	component: LibraryLayout,
})

function LibraryLayout() {
	const components = [
		{ name: "Buttons", icon: MousePointer2 },
		{ name: "Cards", icon: Layers },
		{ name: "Navigation", icon: Box },
		{ name: "Animations", icon: Palette },
		{ name: "Data Display", icon: Code },
	]

	return (
		<div className="flex h-screen overflow-hidden bg-slate-950 text-slate-200">
			{/* SSR Sidebar Shell */}
			<aside className="w-72 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 hidden lg:flex flex-col gap-8 shadow-2xl">
				<div className="flex items-center gap-3 px-2">
					<div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white ring-4 ring-indigo-500/20">
						UI
					</div>
					<span className="text-xl font-bold tracking-tight">Design Lab</span>
				</div>

				<nav className="flex flex-col gap-1">
					<div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 px-2">
						Components
					</div>
					{components.map((item) => (
						<Link
							key={item.name}
							to="/library"
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition-all hover:bg-slate-800 hover:text-white group [&.active]:bg-indigo-600/10 [&.active]:text-indigo-400 [&.active]:ring-1 [&.active]:ring-indigo-500/30"
						>
							<item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
							<span className="font-medium">{item.name}</span>
						</Link>
					))}
				</nav>
			</aside>

			{/* Main Preview Area */}
			<div className="flex flex-1 flex-col overflow-hidden">
				{/* Glassy Header */}
				<header className="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
					<div className="flex items-center gap-4 text-sm font-medium text-slate-400">
						<span>Library</span>
						<span className="text-slate-600">/</span>
						<span className="text-slate-200">Featured Templates</span>
					</div>
					<Link
						to="/"
						className="text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
					>
						Exit Lab
					</Link>
				</header>

				{/* The Dynamic Content Area */}
				<main className="flex-1 overflow-auto bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 p-8 sm:p-12">
					<div className="mx-auto max-w-6xl">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	)
}
