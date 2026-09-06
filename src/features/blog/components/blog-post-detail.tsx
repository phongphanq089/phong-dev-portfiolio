import { Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Share2,
  Tag,
} from "lucide-react"
import React, { useMemo, useState } from "react"

import { GridContainer } from "@/app/layouts"
import { Button } from "@/shared/ui/core"
import {
  extractTOCFromBlocks,
  PortableTextRenderer,
  TableOfContents,
} from "@/shared/ui/system"

import type { BlogPost } from "../types"

interface BlogPostDetailProps {
  post: BlogPost
  allPosts?: BlogPost[]
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  post,
  allPosts = [],
}) => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Format publication date
  const formattedDate = useMemo(() => {
    try {
      const d = new Date(post.publishedAt)
      return d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    } catch {
      return post.publishedAt
    }
  }, [post.publishedAt])

  // Extract TOC headings from Portable Text body blocks
  const tocItems = useMemo(() => {
    return extractTOCFromBlocks(post.body || [])
  }, [post.body])

  // Find other posts in the same series
  const seriesPosts = useMemo(() => {
    if (!post.group) return []
    return allPosts
      .filter((p) => p.group?.slug.current === post.group?.slug.current)
      .sort((a, b) => (a.groupOrder ?? 0) - (b.groupOrder ?? 0))
  }, [allPosts, post.group])

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    }
  }

  const primaryCategory = post.categories[0]

  return (
    <div className="relative w-full">
      {/* 1. Article Header Section */}
      <GridContainer
        borderTop
        borderBottom
        showCrosshairs
        className="relative flex flex-col justify-between gap-6 overflow-hidden px-4 py-8 sm:px-8 md:py-12"
      >
        {/* Ambient Radial Spotlight */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-pp-primary/10 blur-3xl dark:bg-pp-primary/15" />

        <div className="relative z-10 flex flex-col gap-5">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/blog"
              className="transition-colors hover:text-foreground"
            >
              Writing
            </Link>
            {primaryCategory && (
              <>
                <span>/</span>
                <span className="text-muted-foreground">
                  {primaryCategory.title}
                </span>
              </>
            )}
            <span>/</span>
            <span className="max-w-[200px] truncate font-semibold text-pp-primary sm:max-w-xs">
              {post.title}
            </span>
          </div>

          {/* Badges & Meta Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            {primaryCategory && (
              <span
                className="flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide"
                style={{
                  borderColor: primaryCategory.color
                    ? `${primaryCategory.color}40`
                    : "var(--pp-primary)",
                  backgroundColor: primaryCategory.color
                    ? `${primaryCategory.color}15`
                    : "rgba(0, 180, 216, 0.1)",
                  color: primaryCategory.color || "var(--pp-primary)",
                }}
              >
                {primaryCategory.title}
              </span>
            )}

            {post.group && (
              <span className="flex items-center gap-1.5 rounded-md border border-white/20 bg-black/60 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-xs backdrop-blur-md">
                <BookOpen className="size-3 text-pp-primary" />
                <span>
                  {post.group.title}
                  {post.groupOrder ? ` • Part #${post.groupOrder}` : ""}
                </span>
              </span>
            )}

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" />
              <span>{post.readTime} min read</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="size-3" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl leading-tight font-black tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {post.excerpt}
            </p>
          )}

          {/* Author Row & Share Action */}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-4">
            <div className="flex items-center gap-3">
              <div className="size-10 shrink-0 overflow-hidden rounded-full border border-border/80 bg-muted/80">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-foreground sm:text-sm">
                    {post.author.name}
                  </span>
                  {post.author.verified && (
                    <CheckCircle2
                      className="size-3.5 fill-blue-500 text-background"
                      aria-label="Verified author"
                    />
                  )}
                </div>
                {post.author.role && (
                  <span className="text-[11px] text-muted-foreground/80">
                    {post.author.role}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="h-8 gap-1.5 text-xs font-medium hover:border-pp-primary/60 hover:text-pp-primary"
              >
                {copiedLink ? (
                  <>
                    <Check className="size-3 text-emerald-400" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="size-3" />
                    <span>Share Article</span>
                  </>
                )}
              </Button>

              <Link to="/blog">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1.5 text-xs font-medium hover:border-pp-primary/60 hover:text-pp-primary"
                >
                  <ArrowLeft className="size-3" />
                  <span>All Articles</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </GridContainer>

      {/* 2. Cover Image Banner */}
      {post.coverImage.url && (
        <GridContainer
          borderBottom
          showCrosshairs
          className="relative overflow-hidden p-4 sm:p-8"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border/80 bg-muted/40 shadow-2xl">
            <img
              src={post.coverImage.url}
              alt={post.coverImage.alt || post.title}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </div>
        </GridContainer>
      )}

      {/* 3. Main Reading Content & Outside Sticky Table of Contents */}
      <GridContainer
        borderBottom
        showCrosshairs
        className="relative px-4 py-8 sm:px-8 md:py-12"
      >
        {/* Main Article Reading Column */}
        <article className="mx-auto w-full max-w-3xl">
          {/* Mobile & Small Screen Collapsible Table of Contents */}
          {tocItems.length > 0 && (
            <div className="mb-8 block min-[1360px]:hidden">
              <details className="group rounded-xl border border-border/70 bg-muted/20 p-3.5 transition-colors open:bg-muted/30">
                <summary className="flex cursor-pointer items-center justify-between text-[11px] font-semibold tracking-wider text-muted-foreground uppercase hover:text-foreground">
                  <span className="flex items-center gap-2">
                    <BookOpen className="size-3.5 text-pp-primary" />
                    <span>On this page ({tocItems.length} sections)</span>
                  </span>
                  <ChevronDown className="size-3.5 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-3 border-t border-border/50 pt-3">
                  <TableOfContents
                    items={tocItems}
                    scrollOffset={88}
                    title=""
                  />
                </div>
              </details>
            </div>
          )}

          <PortableTextRenderer value={post.body} />

          {/* Post Tags Footer */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 flex flex-col gap-2.5 border-t border-border/60 pt-6">
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                <Tag className="size-3.5 text-pp-primary" />
                <span>Topics & Tags</span>
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag._id}
                    className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-pp-primary/60 hover:text-foreground"
                  >
                    #{tag.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Series Navigator Banner if in multi-part series */}
          {post.group && seriesPosts.length > 1 && (
            <div className="mt-10 overflow-hidden rounded-xl border border-pp-primary/30 bg-gradient-to-br from-pp-primary/[0.08] via-background to-background p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-pp-primary uppercase">
                <BookOpen className="size-4" />
                <span>Series: {post.group.title}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                This article is Part #{post.groupOrder} of the{" "}
                {post.group.title} roadmap.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                {seriesPosts.map((sp) => {
                  const isCurrent = sp.slug.current === post.slug.current
                  return (
                    <Link
                      key={sp._id}
                      to="/blog/$slug"
                      params={{ slug: sp.slug.current }}
                      className={`flex items-center justify-between rounded-lg border p-2.5 text-xs transition-all ${
                        isCurrent
                          ? "border-pp-primary bg-pp-primary/10 font-bold text-pp-primary"
                          : "border-border/50 bg-background/50 text-muted-foreground hover:border-pp-primary/50 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex size-5 items-center justify-center rounded-full border border-border text-[10px]">
                          {sp.groupOrder ?? "•"}
                        </span>
                        <span>{sp.title}</span>
                      </div>
                      {isCurrent && (
                        <span className="text-[10px] font-semibold text-pp-primary uppercase">
                          Current Part
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </article>

        {/* Floating & Sticky Table of Contents positioned OUTSIDE the container on the right */}
        {tocItems.length > 0 && (
          <aside
            aria-label="Article Table of Contents"
            className="pointer-events-none absolute top-12 left-[calc(100%+1.5rem)] hidden h-[calc(100%-3rem)] w-56 xl:w-64 min-[1360px]:block 2xl:left-[calc(100%+2.5rem)]"
          >
            <div className="pointer-events-auto sticky top-28">
              <TableOfContents
                items={tocItems}
                scrollOffset={88}
                title="ON THIS PAGE"
                icon={<BookOpen className="size-3.5 opacity-80" />}
              />
            </div>
          </aside>
        )}
      </GridContainer>

      {/* 4. Bottom Navigation / Back Button */}
      <GridContainer
        borderBottom
        showCrosshairs
        className="flex items-center justify-between p-4 sm:p-8"
      >
        <Link
          to="/blog"
          className="group flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-pp-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Writing</span>
        </Link>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Back to Top ↑
        </Button>
      </GridContainer>
    </div>
  )
}
