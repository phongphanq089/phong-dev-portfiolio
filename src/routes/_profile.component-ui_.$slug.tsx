import { createFileRoute, notFound } from "@tanstack/react-router"

import { ComponentDetail, COMPONENTS_DATA } from "@/features/component-ui"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/component-ui_/$slug")({
  loader: ({ params }) => {
    const component = COMPONENTS_DATA.find((c) => c.slug === params.slug)
    if (!component) {
      throw notFound()
    }
    return { component }
  },
  head: ({ loaderData }) => {
    const title = loaderData?.component
      ? `${loaderData.component.name} Component • Phong Phan`
      : "Component Details • Phong Phan"
    const description =
      loaderData?.component?.description ??
      "Pixel-perfect UI component documentation and preview."

    return {
      meta: createSeoMeta({
        title,
        description,
      }),
    }
  },
  component: ComponentDetailPage,
})

function ComponentDetailPage() {
  const { component } = Route.useLoaderData()
  return <ComponentDetail component={component} />
}
