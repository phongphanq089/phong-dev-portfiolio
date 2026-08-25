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
import { SectionHeading } from "@/shared/ui/system/section-heading"

export interface BookmarkItem {
  id: string
  title: string
  author: string
  type: "Software" | "Course" | "Reference" | "Book" | "Article"
  date: string
  url: string
  iconType:
    "copper" | "course" | "vercel" | "book" | "article" | "shader" | "code"
}

export const MOCK_BOOKMARKS: BookmarkItem[] = [
  {
    id: "bm-1",
    title: "Copper",
    author: "shadcn",
    type: "Software",
    date: "30.07.2026",
    url: "https://copper.shadcn.com",
    iconType: "copper",
  },
  {
    id: "bm-2",
    title: "Invisible Details",
    author: "Dmytro",
    type: "Course",
    date: "25.07.2026",
    url: "https://invisibledetails.com",
    iconType: "course",
  },
  {
    id: "bm-3",
    title: "Interactive SVG Animations",
    author: "Nanda Syahrasyad",
    type: "Course",
    date: "03.07.2026",
    url: "https://nan.fyi",
    iconType: "course",
  },
  {
    id: "bm-4",
    title: "Interface Craft",
    author: "Josh Puckett",
    type: "Course",
    date: "20.06.2026",
    url: "https://interfacecraft.com",
    iconType: "course",
  },
  {
    id: "bm-5",
    title: "Interfaces",
    author: "Jakub Krehel",
    type: "Course",
    date: "20.06.2026",
    url: "https://interfaces.design",
    iconType: "course",
  },
  {
    id: "bm-6",
    title: "Design Engineer Principles",
    author: "Vercel",
    type: "Reference",
    date: "20.06.2026",
    url: "https://vercel.com/design",
    iconType: "vercel",
  },
  {
    id: "bm-7",
    title: "Making Software",
    author: "Dan Hollick",
    type: "Book",
    date: "08.06.2026",
    url: "https://makingsoftware.com",
    iconType: "book",
  },
  {
    id: "bm-8",
    title: "A Clock That Doesn't Snap",
    author: "Ethan Niser",
    type: "Article",
    date: "07.06.2026",
    url: "https://ethanniser.dev",
    iconType: "article",
  },
  {
    id: "bm-9",
    title: "Details that make interface feel better",
    author: "Emil Kowalski",
    type: "Article",
    date: "01.06.2026",
    url: "https://emilkowal.ski",
    iconType: "article",
  },
  {
    id: "bm-10",
    title: "Crafting Fluid Gestures & Micro-interactions",
    author: "Rauno Freiberg",
    type: "Reference",
    date: "24.05.2026",
    url: "https://rauno.me",
    iconType: "code",
  },
  {
    id: "bm-11",
    title: "Shader Artistry & WebGL Techniques",
    author: "Inigo Quilez",
    type: "Reference",
    date: "10.05.2026",
    url: "https://iquilezles.org",
    iconType: "shader",
  },
]

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
          count={MOCK_BOOKMARKS.length}
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
          {MOCK_BOOKMARKS.map((item) => (
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
