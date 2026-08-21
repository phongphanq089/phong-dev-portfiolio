import { createFileRoute } from "@tanstack/react-router"

import { DesignSystemShowcase } from "@/app/design-system"

export const Route = createFileRoute("/design-system")({
  component: DesignSystemShowcase,
})
