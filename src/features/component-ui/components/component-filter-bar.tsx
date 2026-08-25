import { RotateCcw, Search, X } from "lucide-react"
import React, { useMemo } from "react"

import { cn } from "@/shared/lib"
import { Button, Input } from "@/shared/ui/core"

import type {
  ComponentCategory,
  ComponentCategoryId,
  ComponentItem,
} from "../types"

interface ComponentFilterBarProps {
  categories: ComponentCategory[]
  components: ComponentItem[]
  selectedCategory: ComponentCategoryId
  onSelectCategory: (categoryId: ComponentCategoryId) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  filteredCount: number
  totalCount: number
}

export const ComponentFilterBar: React.FC<ComponentFilterBarProps> = ({
  categories,
  components,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  // Compute count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: components.length }
    for (const cat of categories) {
      if (cat.id === "all") continue
      counts[cat.id] = components.filter((c) => c.category === cat.id).length
    }
    return counts
  }, [categories, components])

  const hasActiveFilters = Boolean(
    selectedCategory !== "all" || searchQuery.trim() !== ""
  )

  return (
    <div className="flex w-full flex-col gap-3 py-3">
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        {/* Horizontal Category Pill Tabs */}
        <div className="no-scrollbar flex flex-1 items-center gap-1.5 overflow-x-auto pt-1 pb-0.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            const count = categoryCounts[cat.id] || 0

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium transition-all duration-200",
                  isSelected
                    ? "border-pp-primary/60 bg-pp-primary/10 text-pp-primary shadow-xs"
                    : "border-border/60 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Search Bar & Reset Button */}
        <div className="flex items-center gap-2">
          <div className="relative flex min-w-[180px] flex-1 items-center sm:w-60">
            <Search className="pointer-events-none absolute left-3 size-3.5 text-muted-foreground/70" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search components..."
              className="h-8.5 w-full rounded-sm border border-border/80 bg-background/80 pr-8 pl-8.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-pp-primary focus:ring-1 focus:ring-pp-primary/40 focus:outline-none dark:bg-[#121214]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 flex size-4 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="size-3" />
              </button>
            )}
          </div>

          {hasActiveFilters && (
            <Button
              type="button"
              onClick={() => {
                onSelectCategory("all")
                onSearchChange("")
              }}
              className="flex h-8.5 items-center gap-1.5 rounded-sm border border-border/80 bg-muted/40 px-2.5 text-xs text-muted-foreground transition-colors hover:border-pp-primary/50 hover:bg-pp-primary/10 hover:text-pp-primary"
            >
              <RotateCcw className="size-3" />
              <span className="max-sm:hidden">Reset</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
