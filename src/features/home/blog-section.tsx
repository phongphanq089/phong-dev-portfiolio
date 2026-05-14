import { GridSection } from "@/components/layout/profile/grid-layout"

const BlogSection = () => {
  return (
    <>
      {/* ── Blog Section ── */}
      <GridSection className="px-8 pt-16 pb-0 md:px-16" showCrosshairs={false}>
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              03 / Writing
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Blog
              <span className="ml-3 align-middle font-mono text-xl font-normal text-muted-foreground/40">
                (37)
              </span>
            </h2>
            <p className="mt-1 text-muted-foreground">
              Thoughts on code, design, and everything in between.
            </p>
          </div>
          <button className="group mb-1 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-accent/60 hover:text-foreground">
            All posts
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </GridSection>

      {/* Blog cards */}
      <GridSection
        className="px-8 py-8 md:px-16"
        borderTop={false}
        showCrosshairs={false}
      >
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border md:grid-cols-2">
          {[
            {
              img: "/assets/images/blog-vercel.png",
              alt: "React Wheel Picker",
              category: "Open Source",
              title: "React Wheel Picker joins Vercel Open Source Program",
              date: "24.07.2025",
              readTime: "4 min",
              isNew: false,
            },
            {
              img: "/assets/images/blog-gradient.png",
              alt: "Fluid Gradient Text",
              category: "Component",
              title: "Fluid Gradient Text — mouse-tracking SVG animation",
              date: "03.05.2026",
              readTime: "3 min",
              isNew: true,
            },
            {
              img: "/assets/images/blog-shadcn.png",
              alt: "Followed by shadcn",
              category: "Milestone",
              title: "Followed by @shadcn on X",
              date: "21.06.2025",
              readTime: "2 min",
              isNew: false,
            },
            {
              img: "/assets/images/blog-toc.png",
              alt: "TOC Minimap",
              category: "UX",
              title: "TOC Minimap — table of contents as a scrollable map",
              date: "27.04.2026",
              readTime: "5 min",
              isNew: true,
            },
          ].map(({ img, alt, category, title, date, readTime, isNew }) => (
            <div
              key={title}
              className="group flex cursor-pointer flex-col bg-card transition-all duration-300 hover:bg-accent/30"
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* Category + NEW badge */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase">
                      {category}
                    </span>
                    {isNew && (
                      <span className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[8px] font-bold text-primary/80">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm leading-snug font-semibold text-foreground/90 transition-colors duration-200 group-hover:text-foreground">
                    {title}
                  </h3>
                </div>

                {/* Footer meta */}
                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                  <span className="font-mono text-[10px] text-muted-foreground/50">
                    {date}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/40">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {readTime} read
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GridSection>

      {/* Blog CTA */}
      <GridSection
        className="flex items-center justify-center py-10"
        borderTop={true}
        showCrosshairs={false}
      >
        <button className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-white/25 hover:bg-accent hover:text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-all group-hover:bg-primary" />
          View all posts
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </GridSection>
    </>
  )
}

export default BlogSection
