import { createFileRoute } from "@tanstack/react-router"
import { Studio } from "sanity"

import { createSeoMeta } from "@/shared/config"

import sanityConfig from "../../sanity.config"

export const Route = createFileRoute("/studio/$")({
  ssr: false,
  head: () => ({
    meta: createSeoMeta("studio"),
  }),
  component: StudioPage,
})

function StudioPage() {
  return (
    <div className="fixed inset-0 z-[9999] h-[100dvh] w-full overflow-hidden bg-black">
      <Studio config={sanityConfig} />
    </div>
  )
}
