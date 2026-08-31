import { PageHero } from "@/shared/ui/system"

interface ComponentHeroProps {
  totalCount?: number
}

export function ComponentHero({ totalCount = 26 }: ComponentHeroProps) {
  return (
    <PageHero
      badge="Components"
      title="Pixel-perfect, uniquely crafted."
      stats={[
        { label: `${totalCount} PRIMITIVES`, highlight: true },
        { label: "3-COLUMN BLUEPRINT" },
        { label: "TAILWIND CSS V4", hideOnMobile: true },
      ]}
    />
  )
}
