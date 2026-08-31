import { PageHero } from "@/shared/ui/system"

interface BlogHeroProps {
  totalCount: number
}

export function BlogHero({ totalCount }: BlogHeroProps) {
  return (
    <PageHero
      badge={{ label: "Articles & Notes", pulsingDot: true }}
      count={`${totalCount} POSTS`}
      title="Writing, Insights & UI Architecture"
    />
  )
}
