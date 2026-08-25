import { createFileRoute } from "@tanstack/react-router"

import { BlogGrid } from "@/features/blog"
import { createSeoMeta } from "@/shared/config"

export const Route = createFileRoute("/_profile/blog")({
  head: () => ({
    meta: createSeoMeta("blog"),
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="w-full">
      <BlogGrid />
    </div>
  )
}
