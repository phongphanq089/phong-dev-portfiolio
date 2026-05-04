import { GridSection } from "@/components/layout/profile/grid-layout"

export function HomeView() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <GridSection className="flex flex-col items-center justify-center py-24 text-center">
        {/* <Avatar className="h-24 w-24 mb-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>RN</AvatarFallback>
        </Avatar>
         */}
        <h1 className="mb-6 text-6xl font-medium tracking-tight md:text-8xl">
          Hi, I'm Ron.
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Designing scalable web & mobile experiences with expertise in building
          and maintaining design systems that scale with the team.
        </p>
      </GridSection>

      {/* Info Bar Section */}
      <GridSection className="flex justify-between px-6 py-4 text-xs tracking-widest text-muted-foreground uppercase md:px-0">
        <div>Bengaluru, India</div>
        <div>14:32:53 GMT+5:30</div>
      </GridSection>

      {/* About Section */}
      <section className="relative z-1 border-b border-border">
        <div className="relative mx-auto h-full max-w-5xl border-r border-l border-border">
          {/* Floating Image - Left */}
          <div className="absolute top-1/2 left-0 z-20 hidden -translate-x-[55%] -translate-y-[40%] rotate-[-8deg] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:rotate-0 md:block md:w-56 lg:w-64">
            <img
              src="https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=b6e3f4&seed=Easton"
              alt="Workspace setup"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Floating Image - Right */}
          <div className="absolute top-1/2 right-0 z-20 hidden translate-x-[55%] -translate-y-[30%] rotate-[6deg] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:rotate-0 md:block md:w-56 lg:w-64">
            <img
              src="https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=b6e3f4&seed=Easton"
              alt="Coffee and work"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Dark card with folded corner */}
          <div className="relative m-8 md:m-12">
            {/* The dark background card — top-right corner clipped */}
            <div className="relative bg-gray-900 px-16 py-20 text-center md:px-32 lg:px-40">
              {/* Vertical Side Label */}
              <div className="absolute top-8 left-6 hidden flex-col items-center gap-3 md:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted/80">
                  <svg
                    className="h-4 w-4 text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span className="text-[9px] tracking-[0.35em] text-muted-foreground/60 uppercase [writing-mode:vertical-lr]">
                  About Me
                </span>
              </div>

              {/* Heading */}
              <h2 className="mb-10 max-w-2xl text-4xl leading-tight font-medium tracking-tight md:text-5xl lg:text-6xl">
                More coffee, more experiments,
                <br />
                until something clicks
              </h2>

              {/* Text content */}
              <div className="relative mx-auto max-w-lg text-left text-base leading-relaxed text-muted-foreground md:text-[17px]">
                <p className="mb-4">
                  I've been a designer since 2022. Initially, I was more drawn
                  to visual design, arranging elements inside a frame,
                  replicating designs I found on Dribbble just to see if I could
                  pull them off. What started as curiosity about making things
                  look good slowly turned into something deeper.
                </p>
                {/* Faded second paragraph with gradient fade-out */}
                <div className="relative">
                  <p className="opacity-50">
                    Over time, I found myself more interested in design systems.
                    I love the idea of creating order, consistency, and scalable
                    foundations that make life easier for everyone. I find
                    myself drawn to the intersection of design and
                    engineering...
                  </p>
                </div>
              </div>
            </div>

            {/* Folded corner triangle — gradient fills the top-right cut-out */}
            <div className="bg-border-line pointer-events-none absolute top-0 right-0 z-20" />
          </div>
        </div>
      </section>

      {/* Work Section (2 columns) */}
      <GridSection columns={2} className="min-h-[600px]">
        {/* Left Column */}
        <div className="flex flex-col p-8 md:p-16">
          <h2 className="mb-2 text-4xl font-medium">Work.</h2>
          <p className="text-2xl text-muted-foreground">
            Projects I've
            <br />
            been working
            <br />
            on lately.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12 p-8 md:p-16">
          {/* Example Project Item */}
          <div className="group cursor-pointer">
            <div className="mb-6 aspect-video overflow-hidden rounded-lg border border-border bg-card">
              {/* Project Image Placeholder */}
              <div className="h-full w-full bg-gradient-to-br from-card to-muted"></div>
            </div>
            <h3 className="mb-2 flex items-center gap-2 text-xl font-medium">
              <span className="inline-block h-6 w-6 rounded bg-primary"></span>
              Fragmento
            </h3>
            <p className="text-muted-foreground">
              Designed and launched a design token management platform that
              syncs design tokens between Figma and code, eliminating manual
              handoffs and reducing design-to-code delivery time by 90%.
            </p>
          </div>
        </div>
      </GridSection>

      {/* Blog Section Header */}
      <GridSection className="px-8 pt-24 pb-8 md:px-16" showCrosshairs={false}>
        <h2 className="flex items-baseline gap-2 text-4xl font-medium tracking-tight">
          Blog <span className="text-xl font-normal text-muted-foreground opacity-70">(37)</span>
        </h2>
      </GridSection>

      {/* Blog Posts Grid */}
      <GridSection columns={2} className="min-h-[600px]" borderTop={true}>
        {/* Left Column */}
        <div className="flex flex-col gap-12 p-8 md:p-16">
          {/* Post 1 */}
          <div className="group cursor-pointer">
            <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-card/50">
              <img
                src="/assets/images/blog-vercel.png"
                alt="React Wheel Picker"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium leading-snug">
              React Wheel Picker joins
              <br />
              Vercel Open Source Program
            </h3>
            <p className="text-sm font-mono text-muted-foreground">24.07.2025</p>
          </div>

          {/* Post 3 */}
          <div className="group cursor-pointer">
            <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-card/50">
              <img
                src="/assets/images/blog-gradient.png"
                alt="Fluid Gradient Text"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 flex items-center gap-2 text-xl font-medium leading-snug">
              Fluid Gradient Text
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
            </h3>
            <p className="text-sm font-mono text-muted-foreground">03.05.2026</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12 p-8 md:p-16">
          {/* Post 2 */}
          <div className="group cursor-pointer">
            <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-card/50">
              <img
                src="/assets/images/blog-shadcn.png"
                alt="Followed by @shadcn on X"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium leading-snug">
              Followed by @shadcn on X
            </h3>
            <p className="text-sm font-mono text-muted-foreground">21.06.2025</p>
          </div>

          {/* Post 4 */}
          <div className="group cursor-pointer">
            <div className="mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-card/50">
              <img
                src="/assets/images/blog-toc.png"
                alt="TOC Minimap"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 flex items-center gap-2 text-xl font-medium leading-snug">
              TOC Minimap
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
            </h3>
            <p className="text-sm font-mono text-muted-foreground">27.04.2026</p>
          </div>
        </div>
      </GridSection>

      {/* Blog Footer CTA */}
      <GridSection className="flex justify-center py-12" borderTop={true}>
        <button className="group flex items-center gap-2 rounded-md bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-all hover:bg-foreground/90">
          All Posts
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

      {/* Contact Bar */}
      <GridSection columns={2} className="py-8">
        <div className="flex flex-col justify-center px-8 md:px-16">
          <h3 className="font-medium">Get in touch</h3>
          <p className="text-sm text-muted-foreground uppercase">
            Send a DM and I'll get back to you asap.
          </p>
        </div>
        <div className="flex items-center gap-4 px-8 md:px-16">
          {/* Social links placeholders */}
          <div className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-accent/50">
            In
          </div>
          <div className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-accent/50">
            Tw
          </div>
          <div className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border border-border hover:bg-accent/50">
            Gh
          </div>
        </div>
      </GridSection>

      {/* Footer CTA */}
      <GridSection className="flex items-center justify-between px-8 py-24 md:px-16">
        <h2 className="text-4xl font-medium">
          Let's build something together!
        </h2>
        <button className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors hover:bg-foreground/90">
          Email me
        </button>
      </GridSection>
    </div>
  )
}
