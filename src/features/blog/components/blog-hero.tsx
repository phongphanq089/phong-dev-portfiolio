import { GridContainer } from "@/app/layouts"

interface BlogHeroProps {
  totalCount: number
}

export function BlogHero({ totalCount }: BlogHeroProps) {
  return (
    <GridContainer
      borderTop
      borderBottom
      showCrosshairs
      className="relative flex flex-col justify-between gap-6 overflow-hidden px-4 py-8 sm:px-8 md:py-12"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pp-primary/5 blur-3xl dark:bg-pp-primary/10" />

      <div className="relative z-10 flex flex-col gap-3">
        {/* Eyebrow badge */}
        <div className="flex items-center gap-2">
          <span className="section-label flex items-center gap-1.5 text-pp-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-pp-primary" />
            01 / ARTICLES & NOTES
          </span>
          <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
            {totalCount} POSTS
          </span>
        </div>
        <h1 className="section-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Writing, Insights & UI Architecture
        </h1>
      </div>
    </GridContainer>
  )
}
