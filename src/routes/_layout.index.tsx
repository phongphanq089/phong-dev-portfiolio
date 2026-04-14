import { createFileRoute } from "@tanstack/react-router"
import BannerHero from "@/feature/home/components/banner-hero"

export const Route = createFileRoute("/_layout/")({
	component: App,
})

function App() {
	return (
		<div className="w-full">
			<BannerHero />
		</div>
	)
}
