import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

import { GridContainer } from "@/app/layouts"
import { BlogCard } from "@/features/blog/components/blog-card"
import { MOCK_BLOG_POSTS } from "@/features/blog/mock-data"
import { SectionHeading } from "@/shared/ui/system/section-heading"

export const SectionBlog = () => {
  // Select top 2 featured posts
  const featuredPosts = MOCK_BLOG_POSTS.slice(0, 2)

  return (
    <>
      <GridContainer className="px-4 py-5 md:px-8" showCrosshairs={false}>
        <SectionHeading
          id="blog"
          label="05 / Writing & Insights"
          heading="Articles & Notes"
          subtitle="Thoughts on frontend architecture, UI performance, and animations."
          action={
            <Link
              to="/blog"
              className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-accent/60 hover:text-foreground active:scale-98"
            >
              <span>View all articles</span>
              <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          }
        />
      </GridContainer>

      {/* 2-Column Grid of Featured Blog Posts */}
      <GridContainer
        columns={2}
        borderTop={false}
        borderBottom={true}
        showCrosshairs={true}
        className="w-full"
      >
        {featuredPosts.map((post, idx) => (
          <div
            key={post._id}
            className={`flex h-full w-full ${
              idx === 0
                ? "border-b border-border md:border-r md:border-b-0"
                : ""
            }`}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </GridContainer>
    </>
  )
}
