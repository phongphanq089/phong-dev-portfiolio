import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-white/30 hover:bg-black/90 active:scale-95 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5 text-white/70 transition-colors group-hover:text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 rounded-full border border-white/10 bg-black/80 px-2.5 py-1 font-mono text-[10px] whitespace-nowrap text-white/60 opacity-0 transition-opacity group-hover:opacity-100">
        Back to top
      </span>
    </button>
  )
}
