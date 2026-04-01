import { createFileRoute, Outlet } from "@tanstack/react-router"
import Footer from "@/components/Footer"
import { SpotlightNavbar } from "@/components/layout/header-public"
import { ThemeProvider } from "@/provider/theme-provider"

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
})

function LayoutComponent() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{/* <Header /> */}
			<SpotlightNavbar />
			<Outlet />
			<Footer />
		</ThemeProvider>
	)
}
