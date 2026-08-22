import { AnimatePresence, motion } from "framer-motion"
import { LayoutGrid, Search, X } from "lucide-react"
import { useState } from "react"

import { cn } from "@/shared/lib/utils"
import { openCommandMenu } from "@/widgets/command-menu"

import { MenuItem, type NavItemType } from "./menu-item"
import { navItems } from "./setting-menu"

export const MenuBottomMobile = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  // The permanent first 3 tabs (Home, PROJECTS, BLOG)
  const primaryTabs = navItems.slice(0, 3)
  // The expanded sheet items (RESOURCES, STUDIO)
  const expandedTabs = navItems.slice(3)

  return (
    <div className="fixed bottom-1 left-1/2 z-200 w-full max-w-[98%] -translate-x-1/2 lg:hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-2 overflow-hidden border border-white/20 bg-black/90 p-2 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false)
                  openCommandMenu()
                }}
                className="col-span-2 flex items-center gap-2 rounded border border-white/15 bg-white/5 p-2 text-left text-xs font-medium text-white/90 transition-colors hover:bg-white/10 active:scale-98"
              >
                <Search className="size-4 text-primary" />
                <span className="flex-1 font-sans text-xs">
                  Search Commands & Pages
                </span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/70">
                  Ctrl+K
                </span>
              </button>
              {expandedTabs.map((item) => (
                <MenuItem
                  key={item.label}
                  item={item as NavItemType}
                  variant="mobile-expanded"
                  onClick={() => setIsExpanded(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dock Bar */}
      <div className="flex items-center justify-between border border-border bg-background/90 p-1.5 shadow-2xl backdrop-blur-md">
        <div className="flex flex-1 items-center gap-1">
          {primaryTabs.map((item) => (
            <MenuItem
              key={item.label}
              item={item as NavItemType}
              variant="mobile-primary"
            />
          ))}

          {/* MORE Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex h-full flex-1 flex-col items-center justify-center gap-1 border bg-primary py-2 text-white transition-all active:scale-95",
              isExpanded ? "border-primary" : "border-transparent"
            )}
          >
            {isExpanded ? (
              <X className="h-4 w-4 animate-pulse text-white" />
            ) : (
              <LayoutGrid className="h-4 w-4 text-white" />
            )}
            <span className="text-[9px] font-bold tracking-tighter text-white/80">
              MORE
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuBottomMobile
