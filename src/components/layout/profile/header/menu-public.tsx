import { Link } from "@tanstack/react-router"

import LiquidMetalButton from "@/components/ui/animation/liquid-metal-button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "Home",
    color: "text-[#66ff00]",
    border: "border-[#66ff00]",
    bg: "bg-[#66ff00]",
  },
  {
    label: "PROJECTS",
    color: "text-[#ff00ff]",
    border: "border-[#ff00ff]",
    bg: "bg-[#ff00ff]",
  },
  {
    label: "BLOG",
    color: "text-[#ff6600]",
    border: "border-[#ff6600]",
    bg: "bg-[#ff6600]",
  },
  {
    label: "RESOURECES",
    color: "text-[#ffcc00]",
    border: "border-[#ffcc00]",
    bg: "bg-[#ffcc00]",
  },
  {
    label: "STUDIO",
    color: "text-white",
    border: "border-white",
    bg: "bg-white",
  },
]

export const Header = () => {
  return (
    <header className="w-full">
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 bg-accent px-2 py-2 shadow-2xl dark:bg-[#111111]">
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
        <nav className="custom-scrollbar hidden flex-1 items-center gap-3 overflow-x-auto px-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to="/"
              className={cn(
                "group relative flex items-center gap-3 border border-white/5 bg-black px-4 py-2 transition-all duration-200",
                "hover:border-current",
                item.color
              )}
            >
              {/* Color Square */}
              <div className={cn("h-3 w-3 shrink-0", item.bg)} />

              {/* Text */}
              <span className="font-mono text-sm font-bold tracking-wider whitespace-nowrap text-white group-hover:text-inherit">
                {item.label}
              </span>
            </Link>
          ))}

          <ModeToggle />
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="ml-auto hidden pr-1 md:block">
          <LiquidMetalButton
            icon={<div className="h-5 w-5 rounded bg-primary-color" />}
            size="sm"
            borderWidth={5}
            metalConfig={{
              colorBack: "#888888",
              colorTint: "#ffffff",
              distortion: 0.15,
              speed: 0.4,
            }}
          >
            STUDIO
          </LiquidMetalButton>
        </div>
        <div className="ml-auto md:hidden">
          <LiquidMetalButton
            icon={<div className="h-5 w-5 rounded bg-primary-color" />}
            size="sm"
            borderWidth={5}
            metalConfig={{
              colorBack: "#888888",
              colorTint: "#ffffff",
              distortion: 0.15,
              speed: 0.4,
            }}
          >
            STUDIO
          </LiquidMetalButton>
        </div>
      </div>
    </header>
  )
}

export default Header
