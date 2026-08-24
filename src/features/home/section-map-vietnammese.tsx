import type { MouseEvent, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/shared/lib"

interface MousePosition {
  x: number
  y: number
}

export default function SectionMapVietnamese() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<MousePosition | undefined>({
    x: 0,
    y: 0,
  })
  const [isMouseLeave, setIsMouseLeave] = useState(true)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    setIsMouseLeave(false)
    setPosition({
      x: clientX,
      y: clientY,
    })
  }

  const handleMouseLeave = () => setIsMouseLeave(true)
  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      className="group/article relative place-items-center"
    >
      <Card
        className="w-full"
        containerMousePosition={position}
        isMouseLeave={isMouseLeave}
      >
        <div className="relative size-full place-items-center">
          <img
            src="/assets/svg/VN-map.svg?updatedAt=1745730197368"
            className="w-9/10 grayscale-100 transition-[filter] duration-300 group-hover/article:grayscale-50 hover:grayscale-0"
          />
        </div>
      </Card>
    </article>
  )
}
const Card = ({
  containerMousePosition,
  className,
  isMouseLeave,
  children,
}: {
  containerMousePosition?: MousePosition
  className?: string
  isMouseLeave?: boolean
  children: ReactNode
}) => {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const rect = spotlightRef.current?.getBoundingClientRect()
    setSpotlightPosition({
      x: (containerMousePosition?.x || 0) - (rect?.left || 0),
      y: (containerMousePosition?.y || 0) - (rect?.top || 0),
    })
  }, [containerMousePosition?.x, containerMousePosition?.y])
  return (
    <div
      className={cn("relative overflow-hidden backdrop-blur-2xl", className)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-white/10 transition-opacity duration-1000",
          isMouseLeave && "opacity-0"
        )}
        style={{
          backgroundImage: `radial-gradient(400px at ${spotlightPosition.x}px ${spotlightPosition.y}px ,rgba(255,255,255,0.3), transparent 70%)`,
        }}
      />
      <div className="relative h-full w-full p-px">
        <div className="h-full w-full overflow-hidden bg-accent dark:bg-black">
          {children}
        </div>
      </div>
      <div
        ref={spotlightRef}
        style={{
          backgroundImage: `radial-gradient(800px at ${spotlightPosition.x}px ${spotlightPosition.y}px ,rgba(255,255,255,0.06), transparent 70%)`,
        }}
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-1000",
          isMouseLeave && "opacity-0"
        )}
      />
    </div>
  )
}
