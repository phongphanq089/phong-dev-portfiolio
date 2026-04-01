import { useEffect, useState } from "react"
import { ExternalLink, Play, Zap } from "lucide-react"

export default function TemplatePreview() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((c) => (c + 1) % 100)
		}, 50)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="space-y-12">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
					Featured Components
				</h2>
				<button type="button" className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-500 transition-all active:scale-95">
					<Zap className="h-4 w-4" />
					Refresh Docs
				</button>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{/* Glassy Animated Card Demo */}
				<div className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 active:scale-98">
					{/* Animated background decoration */}
					<div className="absolute top-0 right-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-indigo-500/20 blur-3xl transition-transform group-hover:scale-150" />

					<div className="relative space-y-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 shadow-inner group-hover:animate-pulse">
							<Play className="h-6 w-6 text-indigo-400 fill-indigo-400" />
						</div>
						<div>
							<h3 className="text-xl font-bold text-white">Glass Card Template</h3>
							<p className="text-sm text-slate-400">
								A fully responsive, animated glassmorphism card component with
								modern blur effects.
							</p>
						</div>
					</div>
				</div>

				{/* Client-side logic demo (The "Counter") */}
				<div className="group relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-inner">
					<div
						className="text-8xl font-black tabular-nums transition-all drop-shadow-[0_0_20px_rgba(var(--indigo-500),0.5)]"
						style={{
							color: `hsl(${count * 3.6}, 80%, 65%)`,
						}}
					>
						{count}%
					</div>
					<div className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
						Client Rendering Active
					</div>
				</div>

				{/* Placeholder card */}
				<div className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl border-2 border-dashed border-slate-800 p-8 hover:bg-slate-900/10 transition-colors">
					<div className="space-y-4">
						<div className="h-4 w-24 rounded bg-slate-800" />
						<div className="h-2 w-full rounded bg-slate-900" />
						<div className="h-2 w-2/3 rounded bg-slate-900" />
					</div>
					<div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-500">
						View Source <ExternalLink className="h-4 w-4" />
					</div>
				</div>
			</div>

			<div className="rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-950 p-10 shadow-2xl">
				<h4 className="mb-4 text-lg font-bold text-white">System Logs</h4>
				<pre className="text-xs text-indigo-400 opacity-70">
					{`Ready to mount: library.index.tsx\nHydration complete\nSSR-shell provided by _library.tsx`}
				</pre>
			</div>
		</section>
	)
}
