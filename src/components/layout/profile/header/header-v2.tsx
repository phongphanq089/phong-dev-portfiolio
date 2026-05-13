import { Link } from "@tanstack/react-router"
import { ChevronRight, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import MenuPublicMobileV2 from "./menu-public-mobile-v2"

const navItems = [
  { label: "PRODUCT TOUR", color: "text-[#66ff00]", border: "border-[#66ff00]", bg: "bg-[#66ff00]" },
  { label: "BUY", color: "text-[#ff00ff]", border: "border-[#ff00ff]", bg: "bg-[#ff00ff]" },
  { label: "RENEW", color: "text-[#ff6600]", border: "border-[#ff6600]", bg: "bg-[#ff6600]" },
  { label: "UPGRADE", color: "text-[#ffcc00]", border: "border-[#ffcc00]", bg: "bg-[#ffcc00]" },
  { label: "OLD VERSIONS", color: "text-[#00ccff]", border: "border-[#00ccff]", bg: "bg-[#00ccff]" },
  { label: "RESOURCES", color: "text-white", border: "border-white", bg: "bg-white" },
]

export const HeaderV2 = () => {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center gap-1 bg-[#111111] p-1 shadow-2xl">
        {/* Logo Placeholder */}
        <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black">
          <span className="font-mono text-xl font-bold text-white">P</span>
        </div>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden flex-1 items-center gap-1 overflow-x-auto custom-scrollbar px-1 md:flex">
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
              <div className={cn("h-3 w-3 flex-shrink-0", item.bg)} />
              
              {/* Text */}
              <span className="whitespace-nowrap font-mono text-[9px] font-bold tracking-wider text-white group-hover:text-inherit">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="ml-auto hidden pr-1 md:block">
          <button className="flex items-center gap-2 rounded-sm bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 transition-opacity hover:opacity-90">
            <span className="font-mono text-[10px] font-bold tracking-wider text-black">
              TRY FOR FREE
            </span>
            <ChevronRight className="h-3 w-3 text-black" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="ml-auto pr-1 md:hidden">
          <MenuPublicMobileV2 />
        </div>
      </div>
    </header>
  )
}

export default HeaderV2
