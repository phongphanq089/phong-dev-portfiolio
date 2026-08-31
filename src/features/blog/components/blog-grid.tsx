import { FileSearch } from "lucide-react"
import { useMemo, useState } from "react"

import { GridContainer } from "@/app/layouts"

import { MOCK_BLOG_POSTS, MOCK_CATEGORIES, MOCK_TAGS } from "../mock-data"
import type { BlogPost } from "../types"
import { BlogCard } from "./blog-card"
import { BlogFilterBar } from "./blog-filter-bar"
import { BlogHero } from "./blog-hero"

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter posts based on category, tag, and search query
  const filteredPosts = useMemo(() => {
    return MOCK_BLOG_POSTS.filter((post) => {
      // Category filter
      if (
        selectedCategory &&
        !post.categories.some((c) => c.slug.current === selectedCategory)
      ) {
        return false
      }

      // Tag filter
      if (
        selectedTag &&
        !post.tags?.some((t) => t.slug.current === selectedTag)
      ) {
        return false
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const matchTitle = post.title.toLowerCase().includes(query)
        const matchExcerpt = post.excerpt.toLowerCase().includes(query)
        const matchCategory = post.categories.some((c) =>
          c.title.toLowerCase().includes(query)
        )
        const matchTag = post.tags?.some((t) =>
          t.title.toLowerCase().includes(query)
        )
        const matchAuthor = post.author.name.toLowerCase().includes(query)

        if (
          !matchTitle &&
          !matchExcerpt &&
          !matchCategory &&
          !matchTag &&
          !matchAuthor
        ) {
          return false
        }
      }

      return true
    })
  }, [selectedCategory, selectedTag, searchQuery])

  // Group filtered posts in pairs of 2 for 2-column GridContainer rows
  const postPairs = useMemo(() => {
    const pairs: BlogPost[][] = []
    for (let i = 0; i < filteredPosts.length; i += 2) {
      pairs.push(filteredPosts.slice(i, i + 2))
    }
    return pairs
  }, [filteredPosts])

  return (
    <div className="w-full">
      {/* 1. Blog Hero */}
      <BlogHero totalCount={MOCK_BLOG_POSTS.length} />

      {/* 2. Filter Bar with GridContainer wrapper */}
      <GridContainer borderBottom showCrosshairs className="px-4 py-2 sm:px-8">
        <BlogFilterBar
          categories={MOCK_CATEGORIES}
          posts={MOCK_BLOG_POSTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          availableTags={MOCK_TAGS}
          filteredCount={filteredPosts.length}
          totalCount={MOCK_BLOG_POSTS.length}
        />
      </GridContainer>

      {/* 3. 2-Column Grid Container Rows */}
      {postPairs.length > 0 ? (
        postPairs.map((pair, rowIndex) => (
          <GridContainer
            key={`row-${rowIndex}`}
            columns={2}
            borderBottom
            showCrosshairs
            className="w-full"
          >
            {/* Column 1 (Left Cell) */}
            <div className="flex h-full w-full border-b border-border md:border-b-0">
              <BlogCard post={pair[0]} onSelectTag={setSelectedTag} />
            </div>

            {/* Column 2 (Right Cell) */}
            <div className="flex h-full w-full">
              {pair[1] ? (
                <BlogCard post={pair[1]} onSelectTag={setSelectedTag} />
              ) : (
                /* Empty placeholder cell for odd number of articles */
                <div className="hidden h-full w-full items-center justify-center p-8 text-center md:flex">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                    <span className="font-mono text-[11px] tracking-wider uppercase">
                      More Articles Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          </GridContainer>
        ))
      ) : (
        /* Empty State when 0 posts match filters */
        <GridContainer
          borderBottom
          showCrosshairs
          className="flex flex-col items-center justify-center px-4 py-16 text-center sm:px-8 sm:py-24"
        >
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-muted/30 text-pp-primary shadow-xs">
            <FileSearch className="size-7" />
          </div>
          <h3 className="mt-4 text-lg font-bold text-foreground sm:text-xl">
            No articles found
          </h3>
          <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
            We couldn't find any articles matching your search query or filters.
            Try resetting your criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory(null)
              setSelectedTag(null)
              setSearchQuery("")
            }}
            className="mt-5 rounded-lg border border-pp-primary/40 bg-pp-primary/10 px-4 py-2 font-mono text-xs font-semibold text-pp-primary transition-all duration-200 hover:bg-pp-primary hover:text-white"
          >
            Clear all filters
          </button>
        </GridContainer>
      )}
    </div>
  )
}
