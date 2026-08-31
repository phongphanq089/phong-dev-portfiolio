import { Bookmark } from "lucide-react"

import { PageHero } from "@/shared/ui/system"

interface ResourceHeroProps {
  totalCount: number
}

export function ResourceHero({ totalCount }: ResourceHeroProps) {
  return (
    <PageHero
      badge={{ label: "Curated Toolkit & Bookmarks", pulsingDot: true }}
      count={`${totalCount} RESOURCES`}
      countIcon={<Bookmark className="size-2.5" />}
      title="Curated Tools, Libraries & UI Ecosystem"
      description="A high-signal index of modern UI primitives, shader experiments, physics engines, icon sets, and developer utilities crafted for frontend engineers and creative designers."
    />
  )
}
