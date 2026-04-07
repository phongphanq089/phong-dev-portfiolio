import { createFileRoute, Outlet } from "@tanstack/react-router"
import BackgroundGradientCursor from "@/components/animation/background-gradient-cursor"
import Footer from "@/components/Footer"
import { SpotlightNavbar } from "@/components/layout/header-public"
import { ThemeProvider } from "@/provider/theme-provider"

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
})

function LayoutComponent() {
	const effects = {
		mask: { cursor: true, x: 0, y: 0, radius: 100 },
		gradient: {
			display: true,
			x: 50,
			y: 0,
			width: 100,
			height: 100,
			tilte: 0,
			colorStart: "blue-500",
			colorEnd: "transparent",
			opacity: 50,
		},
		dots: { display: true, size: 2, color: "gray-500", opacity: 20 },
		lines: { display: false, opacity: 100 },
		grid: { display: true, opacity: 100 },
	}

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="min-h-screen flex-1 flex flex-col relative z-10">
				<SpotlightNavbar />
				<main className="flex flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
			<BackgroundGradientCursor
				mask={effects.mask}
				dots={effects.dots}
				grid={effects.grid}
				lines={effects.lines}
			></BackgroundGradientCursor>
		</ThemeProvider>
	)
}
