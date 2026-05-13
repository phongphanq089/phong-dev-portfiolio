import { Link } from "@tanstack/react-router"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "PRODUCT TOUR",
    color: "text-[#66ff00]",
    border: "border-[#66ff00]",
    bg: "bg-[#66ff00]",
  },
  {
    label: "BUY",
    color: "text-[#ff00ff]",
    border: "border-[#ff00ff]",
    bg: "bg-[#ff00ff]",
  },
  {
    label: "RENEW",
    color: "text-[#ff6600]",
    border: "border-[#ff6600]",
    bg: "bg-[#ff6600]",
  },
  {
    label: "UPGRADE",
    color: "text-[#ffcc00]",
    border: "border-[#ffcc00]",
    bg: "bg-[#ffcc00]",
  },
  {
    label: "OLD VERSIONS",
    color: "text-[#00ccff]",
    border: "border-[#00ccff]",
    bg: "bg-[#00ccff]",
  },
  {
    label: "RESOURCES",
    color: "text-white",
    border: "border-white",
    bg: "bg-white",
  },
]

export const MenuPublicMobileV2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Implement Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center border border-white/20 bg-black p-2 transition-colors hover:bg-white/5"
      >
        <Menu className="h-5 w-5 text-white" />
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col bg-black p-4">
            {/* Header in Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black">
                <span className="font-mono text-xl font-bold text-white">
                  P
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center border border-white/20 bg-black p-2"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Nav Items */}
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mt-8 flex flex-col gap-3"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group flex items-center gap-4 border border-white/10 bg-black p-4 transition-all duration-200",
                      "hover:border-current",
                      item.color
                    )}
                  >
                    <div className={cn("h-3 w-3 shrink-0", item.bg)} />
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-white group-hover:text-inherit">
                      {item.label}
                    </span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-30 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom CTA */}
            <div className="mt-auto border-t border-white/10 pt-6">
              <button className="flex w-full items-center justify-between bg-gradient-to-r from-cyan-400 to-blue-500 p-4 transition-opacity hover:opacity-90">
                <span className="font-mono text-sm font-bold tracking-widest text-black">
                  TRY FOR FREE
                </span>
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuPublicMobileV2
