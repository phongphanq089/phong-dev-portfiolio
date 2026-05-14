import { GridSection } from "@/components/layout/profile/grid-layout"

const BookmarkSection = () => {
  return (
    <>
      {/* ── Bookmarks Section ── */}
      <GridSection className="px-8 pt-16 pb-0 md:px-16" showCrosshairs={false}>
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
              03 / Reading
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Bookmarks
              <span className="ml-3 align-middle font-mono text-xl font-normal text-muted-foreground/40">
                (14)
              </span>
            </h2>
            <p className="mt-1 text-muted-foreground">
              Articles, talks, and links I keep coming back to.
            </p>
          </div>
        </div>
      </GridSection>

      <GridSection
        className="px-8 py-8 md:px-16"
        borderTop={false}
        showCrosshairs={false}
      >
        <div className="flex flex-col divide-y divide-border/50 overflow-hidden rounded-xl border border-border">
          {[
            {
              title: "Agents with Taste",
              author: "Emil Kowalski",
              date: "21.04.2026",
              icon: "💬",
            },
            {
              title: "Devouring Details",
              author: "Rauno",
              date: "14.04.2026",
              icon: "◉",
            },
            {
              title: "React handbook",
              author: "Rauno",
              date: "14.04.2026",
              icon: "◉",
            },
            {
              title: "Train Your Judgement",
              author: "Emil Kowalski",
              date: "09.04.2026",
              icon: "💬",
            },
            {
              title: "How we think about design",
              author: "Resend",
              date: "20.12.2025",
              icon: "✦",
            },
            {
              title: "Philosophy",
              author: "Resend",
              date: "20.12.2025",
              icon: "✦",
            },
            {
              title: "7 Principles of Rich Web Applications",
              author: "Guillermo Rauch",
              date: "16.12.2025",
              icon: "◻",
            },
            {
              title: "components.build",
              author: "Hayden Bleasel & shadcn",
              date: "11.12.2025",
              icon: "▲",
            },
            {
              title: "Design Engineering at Vercel",
              author: "Vercel",
              date: "01.12.2025",
              icon: "▲",
            },
            {
              title: "Developing Taste",
              author: "Emil Kowalski",
              date: "01.12.2025",
              icon: "💬",
            },
            {
              title: "Web Interface Guidelines",
              author: "Vercel",
              date: "01.12.2025",
              icon: "▲",
            },
          ].map(({ title, author, date, icon }) => (
            <a
              key={title}
              href="#"
              className="group flex items-center gap-4 bg-card px-5 py-4 transition-colors duration-150 hover:bg-accent/40"
            >
              {/* Favicon placeholder */}
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-border bg-muted/50 font-mono text-[11px] text-muted-foreground/60 select-none">
                {icon}
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="truncate text-sm font-medium text-foreground/85 transition-colors group-hover:text-foreground">
                  {title}
                </span>
                <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/50">
                  <span>{author}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                  <span>{date}</span>
                </div>
              </div>

              {/* External arrow */}
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-muted-foreground/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </GridSection>
    </>
  )
}

export default BookmarkSection
