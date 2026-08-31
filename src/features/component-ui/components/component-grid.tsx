import { useMemo } from "react"

import { GridContainer } from "@/app/layouts"

import { COMPONENTS_DATA } from "../components-data"
import type { ComponentItem } from "../types"
import { ComponentCard } from "./component-card"
import { ComponentHero } from "./component-hero"

export function ComponentGrid() {
  // Chunk components into triplets for 3-column GridContainer rows
  const componentRows = useMemo(() => {
    const rows: ComponentItem[][] = []
    for (let i = 0; i < COMPONENTS_DATA.length; i += 3) {
      rows.push(COMPONENTS_DATA.slice(i, i + 3))
    }
    return rows
  }, [])

  return (
    <div className="w-full">
      {/* 1. Component Hero */}
      <ComponentHero totalCount={COMPONENTS_DATA.length} />

      {/* 2. 3-Column Grid Container Rows */}
      {componentRows.map((triplet, rowIndex) => (
        <GridContainer
          key={`component-row-${rowIndex}`}
          columns={3}
          borderBottom
          showCrosshairs
          className="w-full"
        >
          <div className="flex h-full w-full border-b border-border p-4 sm:p-5 md:border-b-0 md:p-5 lg:p-6">
            <ComponentCard component={triplet[0]} />
          </div>
          <div className="flex h-full w-full border-b border-border p-4 sm:p-5 md:border-b-0 md:p-5 lg:p-6">
            {triplet[1] ? (
              <ComponentCard component={triplet[1]} />
            ) : (
              <div className="hidden h-full w-full items-center justify-center rounded-lg bg-accent p-8 text-center lg:flex">
                <span className="text-[10px] tracking-wider text-muted-foreground/30 uppercase">
                  More Primitives Coming Soon
                </span>
              </div>
            )}
          </div>

          <div className="flex h-full w-full p-4 sm:p-5 md:p-5 lg:p-6">
            {triplet[2] ? (
              <ComponentCard component={triplet[2]} />
            ) : (
              <div className="hidden h-full w-full items-center justify-center rounded-lg bg-accent p-8 text-center lg:flex">
                <span className="text-[10px] tracking-wider text-muted-foreground/30 uppercase">
                  More Primitives Coming Soon
                </span>
              </div>
            )}
          </div>
        </GridContainer>
      ))}
    </div>
  )
}
