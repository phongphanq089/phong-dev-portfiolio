import { createFileRoute, Outlet } from "@tanstack/react-router"

import Footer from "@/components/layout/profile/Footer"
import { GridSection } from "@/components/layout/profile/grid-layout"
import Header from "@/components/layout/profile/header"
import NumbersSimulation from "@/components/layout/profile/numbers-simulation"
import BackgroundGradientCursor from "@/components/ui/animation/background-gradient-cursor"
import { ThemeProvider } from "@/provider/theme-provider"

export const Route = createFileRoute("/_profile")({
  component: LayoutComponent,
})

function LayoutComponent() {
  const effects = {
    mask: { cursor: true, x: 0, y: 0, radius: 100 },
    gradient: {
      display: true,
      x: 50,
      y: 0,
      width: 100,
      height: 100,
      tilte: 0,
      colorStart: "blue-500",
      colorEnd: "transparent",
      opacity: 50,
    },
    dots: { display: true, size: 2, color: "gray-500", opacity: 20 },
    lines: { display: false, opacity: 100 },
    grid: { display: false, opacity: 100 }, // turn off old grid, we use explicit lines now
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen w-full flex-col bg-background text-foreground selection:bg-primary/20">
        {/* ------------------------------ Background cursor gradient ------------------------------------------ */}
        <BackgroundGradientCursor
          mask={effects.mask}
          dots={effects.dots}
          grid={effects.grid}
          lines={effects.lines}
        />
        {/* --------------------------------------------------------------------------------------------------------- */}
        {/* Numbers simulation on the left edge */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-1 hidden w-12 md:block">
          <NumbersSimulation />
        </div>

        {/* ------------------------------ Header ---------------------------------------------- */}
        <GridSection
          borderTop={false}
          borderBottom={true}
          className="flex justify-center py-6"
        >
          <Header />
        </GridSection>
        {/* --------------------------------------------------------------------------------------------------------- */}

        {/* ------------------------------ Main Content Area ------------------------------------------------------ */}
        <main className="flex w-full flex-1 flex-col">
          <Outlet />
        </main>
        {/* --------------------------------------------------------------------------------------------------------- */}

        {/* ------------------------------ Footer ---------------------------------------------------- */}
        <GridSection borderBottom={false}>
          <Footer />
        </GridSection>
        {/* --------------------------------------------------------------------------------------------------------- */}
      </div>
    </ThemeProvider>
  )
}
