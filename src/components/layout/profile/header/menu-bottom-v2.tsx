import { Link } from "@tanstack/react-router"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight, LayoutGrid, X } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "TOUR", color: "text-[#66ff00]", bg: "bg-[#66ff00]", to: "/" },
  { label: "BUY", color: "text-[#ff00ff]", bg: "bg-[#ff00ff]", to: "/" },
  { label: "UPGRADE", color: "text-[#ffcc00]", bg: "bg-[#ffcc00]", to: "/" },
  { label: "MORE", color: "text-white", bg: "bg-white", to: "/" },
]

export const MenuBottomV2 = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-8 left-1/2 z-[100] w-full max-w-[90%] -translate-x-1/2 md:hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 overflow-hidden border border-white/20 bg-black/90 p-2 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {/* Full list of items in the expanded menu */}
              {[
                { label: "RENEW", color: "text-[#ff6600]", bg: "bg-[#ff6600]" },
                {
                  label: "VERSIONS",
                  color: "text-[#00ccff]",
                  bg: "bg-[#00ccff]",
                },
                { label: "RESOURCES", color: "text-white", bg: "bg-white" },
                { label: "SUPPORT", color: "text-primary", bg: "bg-primary" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to="/"
                  className={cn(
                    "flex items-center gap-3 border border-white/10 bg-black p-4 transition-all hover:border-current",
                    item.color
                  )}
                >
                  <div className={cn("h-2 w-2", item.bg)} />
                  <span className="font-mono text-[10px] font-bold tracking-wider text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dock Bar */}
      <div className="flex items-center justify-between border border-white/20 bg-black/80 p-1.5 shadow-2xl backdrop-blur-md">
        <div className="flex flex-1 items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() =>
                item.label === "MORE" ? setIsExpanded(!isExpanded) : null
              }
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 border border-white/5 bg-black py-2.5 transition-all active:scale-95",
                item.label === "MORE" && isExpanded && "border-primary",
                item.color
              )}
            >
              {item.label === "MORE" ? (
                isExpanded ? (
                  <X className="h-4 w-4 text-white" />
                ) : (
                  <LayoutGrid className="h-4 w-4 text-white" />
                )
              ) : (
                <div className={cn("h-2 w-2", item.bg)} />
              )}
              <span className="font-mono text-[8px] font-bold tracking-tighter text-white">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Action Button */}
        <button className="ml-1 h-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5">
          <ChevronRight className="h-5 w-5 text-black" />
        </button>
      </div>
    </div>
  )
}

export default MenuBottomV2
