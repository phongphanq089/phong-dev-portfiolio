import { Link } from "@tanstack/react-router"
import React from "react"

import { cn } from "@/shared/lib"

import { BLOCK_CATEGORIES } from "../blocks-data"
import type { BlockCategoryId } from "../types"

interface BlockFilterBarProps {
  activeCategory?: BlockCategoryId
}

export const BlockFilterBar: React.FC<BlockFilterBarProps> = ({
  activeCategory = "all",
}) => {
  return (
    <div className="no-scrollbar flex w-full items-stretch overflow-x-auto">
      {BLOCK_CATEGORIES.map((cat) => {
        const isSelected = activeCategory === cat.id
        const to = cat.id === "all" ? "/blocks" : `/blocks/${cat.id}`

        return (
          <Link
            key={cat.id}
            to={to}
            className={cn(
              "flex shrink-0 items-center justify-center border-r border-border px-5 py-3 font-mono text-xs font-bold tracking-wider uppercase transition-colors sm:px-6",
              isSelected
                ? "bg-white/10 font-extrabold text-white"
                : "text-muted-foreground/70 hover:bg-white/[0.04] hover:text-foreground"
            )}
          >
            <span>{cat.label}</span>
          </Link>
        )
      })}

      {/* Remaining Technical Blueprint Striped Space (Image 1) */}
      <div className="min-w-[32px] flex-1 bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,rgba(255,255,255,0.03)_6px,rgba(255,255,255,0.03)_7px)]" />
    </div>
  )
}
