import React from "react"

import { GridContainer } from "@/app/layouts"
import { cn } from "@/shared/lib/utils"

import { StripedPattern } from "./striped-pattern"

export interface PageHeroBadge {
  label: string
  icon?: React.ReactNode
  pulsingDot?: boolean
}

export interface PageHeroStat {
  label: string
  highlight?: boolean
  hideOnMobile?: boolean
}

export interface PageHeroProps {
  /** Small category/badge indicator above title */
  badge?: string | PageHeroBadge | React.ReactNode
  /** Count pill displayed next to badge e.g. "26 RESOURCES" or 26 */
  count?: string | number
  /** Icon displayed inside the count pill */
  countIcon?: React.ReactNode
  /** Main heading */
  title: string
  /** Short description below title */
  description?: string
  /** Sub-bar stats / blueprint chips displayed in a border-bottom bar */
  stats?: PageHeroStat[]
  /** Extra slot for custom actions or widgets */
  children?: React.ReactNode
  /** Additional className for the hero GridContainer */
  className?: string
}

/**
 * Standardised Blueprint Hero banner used across subpages (Blocks, Components, Blog, Resources).
 * Synchronizes background blueprint stripes, radial glow, responsive typography, and optional stats bar.
 */
export function PageHero({
  badge,
  count,
  countIcon,
  title,
  description,
  stats,
  children,
  className,
}: PageHeroProps) {
  return (
    <>
      {/* 1. Main Hero Container */}
      <GridContainer
        borderTop
        borderBottom
        showCrosshairs
        className={cn(
          "relative flex flex-col justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-10 md:py-12",
          className
        )}
      >
        {/* Blueprint Striped Background Pattern */}
        <StripedPattern
          variant="absolute"
          className="opacity-70 dark:opacity-40"
        />

        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-pp-primary/10 blur-3xl dark:bg-pp-primary/15" />

        <div className="relative z-10 flex flex-col gap-2.5">
          {/* Eyebrow / Badge Row */}
          {(badge || count !== undefined) && (
            <div className="flex flex-wrap items-center gap-2">
              {badge && (
                <>
                  {typeof badge === "string" ? (
                    <span className="text-xs font-semibold text-muted-foreground/80 sm:text-sm">
                      {badge}
                    </span>
                  ) : React.isValidElement(badge) ? (
                    badge
                  ) : typeof badge === "object" && "label" in badge ? (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-pp-primary uppercase">
                      {badge.pulsingDot && (
                        <span className="size-1.5 animate-pulse rounded-full bg-pp-primary" />
                      )}
                      {badge.icon}
                      {badge.label}
                    </span>
                  ) : null}
                </>
              )}

              {count !== undefined && (
                <span className="flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {countIcon}
                  <span>{count}</span>
                </span>
              )}
            </div>
          )}

          {/* Large Main Heading */}
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Optional Description */}
          {description && (
            <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {description}
            </p>
          )}

          {children}
        </div>
      </GridContainer>

      {/* 2. Optional Blueprint Stats / Metadata Sub-Bar */}
      {stats && stats.length > 0 && (
        <GridContainer borderBottom showCrosshairs className="p-0">
          <div className="no-scrollbar flex w-full items-stretch overflow-x-auto">
            {stats.map((stat, idx) => (
              <div
                key={`stat-${idx}`}
                className={cn(
                  "flex shrink-0 items-center justify-center border-r border-border px-5 py-3 text-xs tracking-wider uppercase sm:px-6",
                  stat.highlight
                    ? "bg-muted font-bold dark:bg-white/10 dark:text-white"
                    : "bg-muted/60 text-muted-foreground dark:bg-white/5 dark:text-muted-foreground",
                  stat.hideOnMobile && "hidden sm:flex"
                )}
              >
                <span>{stat.label}</span>
              </div>
            ))}
            <StripedPattern />
          </div>
        </GridContainer>
      )}
    </>
  )
}
