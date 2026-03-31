import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	component: App,
})

function App() {
	return (
		<div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100"></div>
	)
}
