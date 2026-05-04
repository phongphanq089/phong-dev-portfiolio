import { useEffect, useRef, useState } from "react"

const NumbersSimulation = () => {
  const [lineCount, setLineCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateLineCount = () => {
      const lineHeight = 24 // Matches h-6
      const contentHeight = document.body.scrollHeight
      const count = Math.max(1, Math.ceil(contentHeight / lineHeight))
      setLineCount(count)
    }

    const resizeObserver = new ResizeObserver(() => {
      updateLineCount()
    })

    resizeObserver.observe(document.body)
    updateLineCount()

    // Also update on window resize just in case
    window.addEventListener("resize", updateLineCount)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateLineCount)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 flex w-12 flex-col items-center text-[10px] text-muted-foreground/50 select-none"
    >
      {Array.from({ length: lineCount }).map((_, i) => (
        <div key={i} className="flex h-6 items-center">
          {String(i + 1).padStart(2, "0")}
        </div>
      ))}
    </div>
  )
}

export default NumbersSimulation
