import { createFileRoute } from "@tanstack/react-router"
import { lazy, Suspense } from "react"

// Lazy-load Sanity Studio to avoid OOM during bundling and prevent SSR issues.
const LazyStudio = lazy(() =>
	Promise.all([import("sanity"), import("../../sanity.config")]).then(
		([{ Studio }, { default: studioConfig }]) => ({
			default: function SanityStudio() {
				return <Studio config={studioConfig} />
			},
		}),
	),
)

// Catch-all splat route: handles /studio/, /studio/desk, /studio/desk/123, etc.
export const Route = createFileRoute("/studio/$")({
	component: StudioPage,
})

function StudioPage() {
	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 9999,
				height: "100dvh",
				overflow: "hidden",
			}}
		>
			<Suspense
				fallback={
					<div
						style={{
							display: "flex",
							height: "100%",
							alignItems: "center",
							justifyContent: "center",
							fontFamily: "sans-serif",
						}}
					>
						Loading Studio...
					</div>
				}
			>
				<LazyStudio />
			</Suspense>
		</div>
	)
}
