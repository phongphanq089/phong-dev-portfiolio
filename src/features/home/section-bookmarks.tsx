import {
  ArrowUpRight,
  BookOpen,
  Code2,
  FileText,
  Flame,
  Layers,
  Triangle,
} from "lucide-react"

import { GridContainer } from "@/app/layouts"
import { type BookmarkItem, BOOKMARKS } from "@/shared/config"
import { SectionHeading } from "@/shared/ui/system/section-heading"

function renderBookmarkIcon(type: BookmarkItem["iconType"]) {
  switch (type) {
    case "copper":
      return (
        <span className="font-mono text-xs font-black text-white/90">C</span>
      )
    case "vercel":
      return <Triangle className="size-3.5 fill-current text-white/90" />
    case "book":
      return <BookOpen className="size-3.5 text-white/70" />
    case "article":
      return <FileText className="size-3.5 text-white/70" />
    case "shader":
      return <Flame className="size-3.5 text-white/70" />
    case "code":
      return <Code2 className="size-3.5 text-white/70" />
    case "course":
    default:
      return <Layers className="size-3.5 text-white/70" />
  }
}

export const SectionBookmarks = () => {
  return (
    <>
      {/* Heading Section */}
      <GridContainer className="px-4 py-5 md:px-8" showCrosshairs={false}>
        <SectionHeading
          id="bookmarks"
          label="07 / Reading & Discoveries"
          heading="Bookmarks"
          count={BOOKMARKS.length}
          subtitle="Inspiring articles, design engineering references, courses, and tools."
        />
      </GridContainer>

      {/* Bookmarks List Section */}
      <GridContainer
        borderTop={false}
        borderBottom={true}
        showCrosshairs={true}
        className="p-0"
      >
        <div className="divide-y divide-border">
          {BOOKMARKS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-4 py-3.5 transition-colors hover:bg-accent/40 sm:px-8 sm:py-4 dark:hover:bg-white/[0.02]"
            >
              {/* Left Column: Icon + Content */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Icon Container */}
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/50 shadow-xs transition-colors group-hover:border-pp-primary/40 group-hover:bg-pp-primary/10 group-hover:text-pp-primary sm:size-10">
                  {renderBookmarkIcon(item.iconType)}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-pp-primary sm:text-base">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground/70 sm:text-xs">
                    <span>{item.author}</span>
                    <span className="opacity-30">|</span>
                    <span>{item.type}</span>
                    <span className="opacity-30">|</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Diagonal Arrow */}
              <div className="pl-3">
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-pp-primary" />
              </div>
            </a>
          ))}
        </div>
      </GridContainer>
    </>
  )
}
