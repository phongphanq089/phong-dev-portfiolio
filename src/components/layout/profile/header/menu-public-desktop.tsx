import { Link, useRouterState } from "@tanstack/react-router"

import { ModeToggle } from "@/components/ui/mode-toggle"
import { cn } from "@/lib/utils"

import { navItems } from "./setting-menu"

const activeColors: Record<string, string> = {
  Home: "#66ff00",
  PROJECTS: "#ff00ff",
  BLOG: "#ff6600",
  RESOURCES: "#ffcc00",
  STUDIO: "#ffffff",
}

export const Header = () => {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <header className="w-full">
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 bg-accent px-2 py-2 shadow-2xl max-lg:justify-between dark:bg-[#111111]">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-100 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Logo Placeholder */}
        <div className="flex h-12 w-12 items-center justify-center border border-primary-color bg-black p-1">
          <img
            src="/logo-dev.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Navigation Items (Desktop) */}
        <nav className="custom-scrollbar hidden flex-1 items-center gap-3 overflow-x-auto px-1 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.link === "/"
                ? currentPath === "/"
                : currentPath.startsWith(item.link)
            const activeColor = activeColors[item.label] || "#ffffff"

            return (
              <Link
                key={item.label}
                to={item.link}
                className={cn(
                  "group relative flex items-center gap-3 border bg-black px-4 py-2 transition-all duration-300",
                  isActive
                    ? "shadow-[0_0_15px_rgba(255,255,255,0.03)]"
                    : "border-white/5 hover:border-current",
                  item.color
                )}
                style={{
                  borderColor: isActive ? activeColor : undefined,
                }}
              >
                {/* Color Square */}
                <div
                  className={cn(
                    "h-3 w-3 shrink-0 transition-transform duration-300",
                    item.bg,
                    isActive && "scale-110 animate-pulse"
                  )}
                  style={{
                    boxShadow: isActive ? `0 0 10px ${activeColor}` : undefined,
                  }}
                />

                {/* Text */}
                <span
                  className={cn(
                    "font-mono text-sm font-bold tracking-wider whitespace-nowrap transition-colors duration-200 group-hover:text-inherit",
                    isActive ? "text-white" : "text-white/70"
                  )}
                >
                  {item.label}
                </span>

                {/* Cyber Active Bottom Bar */}
                {isActive && (
                  <span
                    className="absolute right-0 bottom-0 left-0 h-[2px] transition-all duration-300"
                    style={{
                      backgroundColor: activeColor,
                      boxShadow: `0 0 8px ${activeColor}`,
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
