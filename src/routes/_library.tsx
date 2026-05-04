import { createFileRoute, Outlet } from "@tanstack/react-router"

import Header from "@/components/layout/studio/header"
import LeftSidebar from "@/components/layout/studio/left-sidebar"
import RightSidebar from "@/components/layout/studio/right-sidebar"
import { ThemeProvider } from "@/provider/theme-provider"

export const Route = createFileRoute("/_library")({
  component: LibraryLayout,
})

function LibraryLayout() {
  // const components = [
  // 	{ name: "Buttons", icon: MousePointer2 },
  // 	{ name: "Cards", icon: Layers },
  // 	{ name: "Navigation", icon: Box },
  // 	{ name: "Animations", icon: Palette },
  // 	{ name: "Data Display", icon: Code },
  // ]

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full flex-col overflow-hidden">
        {/* ------------------------------ Header / Top Navigation ---------------------------------------------- */}
        <Header />
        {/* --------------------------------------------------------------------------------------------------------- */}

        <div className="flex flex-1 overflow-hidden">
          {/* ------------------------------ Left Sidebar ------------------------------------------ */}
          <LeftSidebar />
          {/* --------------------------------------------------------------------------------------------------------- */}

          {/* ------------------------------ Main Content Area ------------------------------------------------------ */}
          <main className="h-full flex-1">
            <div className="custom-scrollbar relative h-full overflow-y-auto">
              {/* ---------------------- Line Numbers Simulation ---------------------- */}
              {/* <NumbersSimulation /> */}

              <div className="mx-auto max-w-5xl px-6 pl-12 md:pl-12">
                <Outlet />
              </div>
            </div>
          </main>
          {/* --------------------------------------------------------------------------------------------------------- */}

          {/* ------------------------------ Right Sidebar - Index -------------------------------------------------- */}
          <RightSidebar />
          {/* --------------------------------------------------------------------------------------------------------- */}
        </div>

        {/* ------------------------------ Footer / Status Bar ---------------------------------------------------- */}
        {/* <Footer /> */}
        {/* --------------------------------------------------------------------------------------------------------- */}
      </div>
    </ThemeProvider>
  )
}
