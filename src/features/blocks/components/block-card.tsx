import { Link } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"
import React from "react"

import { cn } from "@/shared/lib"

import type { BlockItem } from "../types"
import { RenderBlockSchematic } from "./schematics"

interface BlockCardProps {
  block: BlockItem
}

export const BlockCard: React.FC<BlockCardProps> = ({ block }) => {
  return (
    <Link
      to="/blocks/$category/$slug"
      params={{ category: block.category, slug: block.slug }}
      className={cn(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl p-4 transition-all duration-300 sm:p-5",
        "border border-black/10 bg-white/[0.02] dark:border-white/10 dark:bg-[#111113]/90",
        "shadow-xs backdrop-blur-xl",
        "hover:border-black/25 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)] dark:hover:border-white/25",
        "translate-z-0 will-change-transform focus:outline-none"
      )}
    >
      {/* 1. Top Preview Canvas Frame (Image 1 & 2) */}
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-black/50 p-3 transition-colors group-hover:border-white/15 sm:aspect-[16/9] dark:border-white/5 dark:bg-black/70">
        {/* Subtle Ambient Radial Spotlight */}
        <div className="pointer-events-none absolute inset-0 bg-radial from-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Optional Pro Badge (Image 2) */}
        {block.isPro && (
          <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 rounded-md border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[9px] font-bold text-white shadow-xs backdrop-blur-md">
            <span>Pro</span>
          </div>
        )}

        {/* Top-right external link icon */}
        <div className="absolute top-2.5 right-2.5 z-20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex size-6 items-center justify-center rounded-md border border-white/20 bg-black/60 text-white backdrop-blur-md">
            <ArrowUpRight className="size-3" />
          </div>
        </div>

        {/* Schematic Wireframe */}
        <div className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-300 will-change-transform group-hover:scale-[1.02]">
          <RenderBlockSchematic type={block.schematicType} />
        </div>
      </div>

      {/* 2. Bottom Content: Title & Description (Image 1) */}
      <div className="flex flex-col gap-1 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-pp-primary sm:text-base">
            {block.title}
          </h3>
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase">
            {block.category}
          </span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {block.description}
        </p>
      </div>
    </Link>
  )
}
