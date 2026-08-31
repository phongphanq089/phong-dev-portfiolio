import { createFileRoute } from "@tanstack/react-router"

import { DesignSystemShowcase } from "@/app/design-system"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: createSeoMeta("designSystem"),
  }),
  component: DesignSystemShowcase,
})
