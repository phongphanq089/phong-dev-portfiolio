import { createFileRoute } from "@tanstack/react-router"

import {
  resourceCategoriesQueryOptions,
  ResourceGrid,
  resourcesQueryOptions,
} from "@/features/resources"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/resources")({
  loader: async ({ context }) => {
    try {
      const [resources, categories] = await Promise.all([
        context.queryClient.ensureQueryData(resourcesQueryOptions()),
        context.queryClient.ensureQueryData(resourceCategoriesQueryOptions()),
      ])
      return { resources, categories }
    } catch {
      return { resources: undefined, categories: undefined }
    }
  },
  head: () => ({
    meta: createSeoMeta("resources"),
  }),
  component: ResourcesPage,
})

function ResourcesPage() {
  const loaderData = Route.useLoaderData()

  return (
    <div className="w-full">
      <ResourceGrid
        initialResources={loaderData?.resources}
        initialCategories={loaderData?.categories}
      />
    </div>
  )
}
