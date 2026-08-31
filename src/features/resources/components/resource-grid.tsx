import { BookmarkX } from "lucide-react"
import { useMemo, useState } from "react"

import { GridContainer } from "@/app/layouts"
import { SectionEmptyState } from "@/shared/ui/system"

import { MOCK_RESOURCE_CATEGORIES, MOCK_RESOURCES } from "../mock-data"
import type { PricingBadge, Resource, ResourceSortOption } from "../types"
import { ResourceCard } from "./resource-card"
import { ResourceFilterBar } from "./resource-filter-bar"
import { ResourceHero } from "./resource-hero"

export function ResourceGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPricing, setSelectedPricing] = useState<PricingBadge | "ALL">(
    "ALL"
  )
  const [sortOption, setSortOption] = useState<ResourceSortOption>("featured")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter resources based on category, pricing, and search query
  const filteredResources = useMemo(() => {
    const list = MOCK_RESOURCES.filter((resource) => {
      // Category filter
      if (
        selectedCategory &&
        resource.category.slug.current !== selectedCategory
      ) {
        return false
      }

      // Pricing filter
      if (selectedPricing !== "ALL" && resource.pricing !== selectedPricing) {
        return false
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const matchTitle = resource.title.toLowerCase().includes(query)
        const matchDesc = resource.description.toLowerCase().includes(query)
        const matchCategory = resource.category.title
          .toLowerCase()
          .includes(query)
        const matchUrl = resource.url.toLowerCase().includes(query)

        if (!matchTitle && !matchDesc && !matchCategory && !matchUrl) {
          return false
        }
      }

      return true
    })

    // Apply Sorting
    return [...list].sort((a, b) => {
      if (sortOption === "featured") {
        if (a.isFeatured && !b.isFeatured) return -1
        if (!a.isFeatured && b.isFeatured) return 1
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
      }
      if (sortOption === "newest") {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
      }
      if (sortOption === "title") {
        return a.title.localeCompare(b.title)
      }
      return 0
    })
  }, [selectedCategory, selectedPricing, searchQuery, sortOption])

  // Group filtered resources in pairs of 2 for 2-column GridContainer rows
  const resourcePairs = useMemo(() => {
    const pairs: Resource[][] = []
    for (let i = 0; i < filteredResources.length; i += 2) {
      pairs.push(filteredResources.slice(i, i + 2))
    }
    return pairs
  }, [filteredResources])

  return (
    <div className="w-full">
      {/* 1. Resources Hero Section */}
      <ResourceHero totalCount={MOCK_RESOURCES.length} />

      {/* 2. Interactive Filter Bar */}
      <GridContainer borderBottom showCrosshairs className="px-4 py-2 sm:px-8">
        <ResourceFilterBar
          categories={MOCK_RESOURCE_CATEGORIES}
          resources={MOCK_RESOURCES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedPricing={selectedPricing}
          onSelectPricing={setSelectedPricing}
          sortOption={sortOption}
          onSortChange={setSortOption}
          filteredCount={filteredResources.length}
          totalCount={MOCK_RESOURCES.length}
        />
      </GridContainer>

      {/* 3. 2-Column Grid Container Rows */}
      {resourcePairs.length > 0 ? (
        resourcePairs.map((pair, rowIndex) => (
          <GridContainer
            key={`resource-row-${rowIndex}`}
            columns={2}
            borderBottom
            showCrosshairs
            className="w-full"
          >
            {/* Column 1 (Left Cell) */}
            <div className="flex h-full w-full border-b border-border p-4 sm:p-5 md:border-b-0 md:p-6">
              <ResourceCard
                resource={pair[0]}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Column 2 (Right Cell) */}
            <div className="flex h-full w-full p-4 sm:p-5 md:p-6">
              {pair[1] ? (
                <ResourceCard
                  resource={pair[1]}
                  onSelectCategory={setSelectedCategory}
                />
              ) : (
                /* Empty placeholder cell for odd count of items */
                <div className="hidden h-full w-full md:flex">
                  <SectionEmptyState
                    variant="cell"
                    title="More Bookmarks Coming Soon"
                    description="Curating additional design & dev tools."
                  />
                </div>
              )}
            </div>
          </GridContainer>
        ))
      ) : (
        /* Empty State when 0 resources match filters */
        <GridContainer
          borderBottom
          showCrosshairs
          className="p-6 sm:p-10 md:p-12"
        >
          <SectionEmptyState
            icon={<BookmarkX className="size-6" />}
            badge="RESOURCES DIRECTORY"
            title="No resources found"
            description="We couldn't find any resources matching your search query or filters. Try resetting your criteria."
            action={
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedPricing("ALL")
                  setSortOption("featured")
                  setSearchQuery("")
                }}
                className="rounded-lg border border-pp-primary/40 bg-pp-primary/10 px-4 py-2 font-mono text-xs font-semibold text-pp-primary transition-all duration-200 hover:bg-pp-primary hover:text-white active:scale-98"
              >
                Clear all filters
              </button>
            }
          />
        </GridContainer>
      )}
    </div>
  )
}
