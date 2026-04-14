import { createFileRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"

// Using lazy import to ensure the component is client-side only and code-splitted
const NoisyGlowText = lazy(() =>
	import("../components/ui/animation/noisy-glow-text").then((m) => ({
		default: m.NoisyGlowText,
	})),
)

export const Route = createFileRoute("/_layout/about")({
	component: About,
	head: () => ({
		title: "About - GeminiApp",
		meta: [
			{
				name: "description",
				content: "Learn more about TanStack Start and its features.",
			},
		],
	}),
})

function About() {
	return (
		<div className="w-full px-4 py-12 space-y-12">
			<div className="w-full max-w-[300px] mx-auto flex items-center justify-center min-h-40">
				<Suspense
					fallback={
						<div className="w-full h-40 flex items-center justify-center bg-zinc-900/5 rounded-3xl overflow-hidden pointer-events-none">
							<div
								className="text-5xl font-black text-primary-color/10 blur-2xl animate-pulse scale-125 select-none tracking-tighter"
								aria-hidden="true"
							>
								DEVELOPER
							</div>
						</div>
					}
				>
					<NoisyGlowText
						text="DEVELOPER"
						isFull
						glowColor="var(--color-primary-color)"
					/>
				</Suspense>
			</div>

			{/* <section className="island-shell rounded-2xl p-6 sm:p-8">
				<p className="island-kicker mb-2">About</p>
				<h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
					A small starter with room to grow.
				</h1>
				<p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
					TanStack Start gives you type-safe routing, server functions, and
					modern SSR defaults. Use this as a clean foundation, then layer in
					your own routes, styling, and add-ons.
				</p>
			</section> */}
		</div>
	)
}
