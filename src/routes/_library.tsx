import { createFileRoute } from "@tanstack/react-router"

import { StudioLayout } from "@/app/layouts"

export const Route = createFileRoute("/_library")({
  component: StudioLayout,
})
