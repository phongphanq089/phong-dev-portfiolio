import { createFileRoute, notFound } from "@tanstack/react-router"

import { BlockDetail, BLOCKS_DATA } from "@/features/blocks"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/blocks/$category/$slug")({
  loader: ({ params }) => {
    const block = BLOCKS_DATA.find(
      (b) => b.category === params.category && b.slug === params.slug
    )
    if (!block) {
      throw notFound()
    }
    return { block }
  },
  head: ({ loaderData }) => {
    const title = loaderData?.block
      ? `${loaderData.block.title} • Phong Phan Blocks`
      : "Block Details • Phong Phan"
    const description =
      loaderData?.block?.description ??
      "Production-ready responsive UI block template."

    return {
      meta: createSeoMeta({
        title,
        description,
      }),
    }
  },
  component: BlockDetailPage,
})

function BlockDetailPage() {
  const { block } = Route.useLoaderData()
  return <BlockDetail block={block} />
}
