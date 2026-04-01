import { createFileRoute } from "@tanstack/react-router"
import TemplatePreview from "../components/library/template-preview"

export const Route = createFileRoute("/_library/library")({
	component: LibraryIndex,
})

function LibraryIndex() {
	// Danh sách các component mẫu (sau này bạn có thể nạp từ Sanity)
	const templates = [
		{ id: "hero-animation", uuid: "tpl-1", category: "Animations" },
		{ id: "hero-animation", uuid: "tpl-2", category: "Components" },
		{ id: "hero-animation", uuid: "tpl-3", category: "Layouts" },
	]

	return (
		<div className="space-y-16">
			{/* SSR Header - Great for SEO */}
			<section className="max-w-4xl space-y-6">
				<h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl">
					Design <span className="text-indigo-500 underline decoration-indigo-500/30">Laboratory</span>
				</h1>
				<p className="text-xl leading-relaxed text-slate-400 max-w-2xl">
					A sandbox for high-end UI components and interactive templates. 
					The shell is pre-rendered, while the interactive modules below are hydrated on-demand.
				</p>
			</section>

			{/* The Interactive Grid - Client-side Powered */}
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{templates.map((template) => (
					<TemplatePreview 
						key={template.uuid} 
						componentName={template.id} 
					/>
				))}
			</div>

			{/* Footer info - SSR safe */}
			<footer className="pt-12 border-t border-slate-800 text-slate-500 text-sm">
				<p>© 2024 Design Lab - Built with TanStack Start & Framer Motion</p>
			</footer>
		</div>
	)
}
