import BannerHero from "./banner-hero"

export function HomeView() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <div className="mx-auto px-8 md:px-16">
        <BannerHero />
      </div>
      {/*
      <GridSection className="py-12" borderTop={true}>
        <SectionAbout />
      </GridSection> */}

      {/* ── UI Components Section ── */}
      {/* <UiComponentsSection /> */}

      {/* ── Projects Section ── */}
      {/* <ProjectsSection /> */}

      {/* ── Blog Section ── */}
      {/* <BlogSection /> */}

      {/* ── Bookmarks Section ── */}
      {/* <BookmarkSection /> */}
    </div>
  )
}
