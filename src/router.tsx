import { QueryClient } from "@tanstack/react-query"
import { createRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"
import { DefaultCatchBoundary } from "./components/base/default-catch-boundary"
import { NotFound } from "./components/base/not-found"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
	const queryClient = new QueryClient()

	const router = createRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
		defaultViewTransition: true,
	})
	setupRouterSsrQueryIntegration({
		router,
		queryClient,
	})

	return router
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>
	}
}
