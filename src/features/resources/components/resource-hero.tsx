import { Bookmark } from "lucide-react"

import { GridContainer } from "@/app/layouts"

interface ResourceHeroProps {
  totalCount: number
}

export function ResourceHero({ totalCount }: ResourceHeroProps) {
  return (
    <GridContainer
      borderTop
      borderBottom
      showCrosshairs
      className="relative flex flex-col justify-between gap-6 overflow-hidden px-4 py-8 sm:px-8 md:py-12"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pp-primary/10 blur-3xl dark:bg-pp-primary/15" />
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="section-label flex items-center gap-1.5 font-mono text-xs font-semibold text-pp-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-pp-primary" />
            02 / TOOLKIT & BOOKMARKS
          </span>
          <span className="flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
            <Bookmark className="size-2.5" />
            {totalCount} RESOURCES
          </span>
        </div>

        {/* Title */}
        <h1 className="section-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Curated Tools, Libraries & UI Ecosystem
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          A high-signal index of modern UI primitives, shader experiments,
          physics engines, icon sets, and developer utilities crafted for
          frontend engineers and creative designers.
        </p>
      </div>
    </GridContainer>
  )
}
