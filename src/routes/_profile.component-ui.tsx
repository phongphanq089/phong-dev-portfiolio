import { createFileRoute } from "@tanstack/react-router"

import { ComponentGrid } from "@/features/component-ui"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/component-ui")({
  head: () => ({
    meta: createSeoMeta("componentUi"),
  }),
  component: ComponentUiPage,
})

function ComponentUiPage() {
  return (
    <div className="w-full">
      <ComponentGrid />
    </div>
  )
}
