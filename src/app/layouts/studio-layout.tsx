import { Outlet } from "@tanstack/react-router"

import { ThemeProvider } from "@/shared/providers/theme-provider"
import {
  Header,
  LeftSidebar,
  RightSidebar,
} from "@/widgets/studio-layout-blocks"

export function StudioLayout({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen w-full flex-col overflow-hidden">
        {/* Header / Top Navigation */}
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content Area */}
          <main className="h-full flex-1">
            <div className="custom-scrollbar relative h-full overflow-y-auto">
              <div className="mx-auto max-w-5xl px-6 pl-12 md:pl-12">
                {children ?? <Outlet />}
              </div>
            </div>
          </main>

          {/* Right Sidebar - Index */}
          <RightSidebar />
        </div>
      </div>
    </ThemeProvider>
  )
}
