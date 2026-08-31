import { createFileRoute } from "@tanstack/react-router"

import { ResourceGrid } from "@/features/resources"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/resources")({
  head: () => ({
    meta: createSeoMeta("resources"),
  }),
  component: ResourcesPage,
})

function ResourcesPage() {
  return (
    <div className="w-full">
      <ResourceGrid />
    </div>
  )
}
