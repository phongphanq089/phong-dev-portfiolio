import { createFileRoute, notFound, redirect } from "@tanstack/react-router"

import { BLOCKS_DATA } from "@/features/blocks"

export const Route = createFileRoute("/_profile/block_/$slug")({
  beforeLoad: ({ params }) => {
    const block = BLOCKS_DATA.find((b) => b.slug === params.slug)
    if (!block) {
      throw notFound()
    }
    throw redirect({
      to: "/blocks/$category/$slug",
      params: { category: block.category, slug: block.slug },
    })
  },
})
