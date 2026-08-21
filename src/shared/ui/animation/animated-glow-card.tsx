import React, { useRef } from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

const CardCanvas: React.FC<CardProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    containerRef.current.style.setProperty("--mouse-x", `${x}px`)
    containerRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`card-canvas ${className}`}
    >
      <div className="card-backdrop"></div>
      {children}
    </div>
  )
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glow-card ${className}`}>
      {/* Corner crosshairs extending outwards */}
      <div className="corner-crosshair tl">
        <div className="line-h" />
        <div className="line-v" />
      </div>
      <div className="corner-crosshair tr">
        <div className="line-h" />
        <div className="line-v" />
      </div>
      <div className="corner-crosshair bl">
        <div className="line-h" />
        <div className="line-v" />
      </div>
      <div className="corner-crosshair br">
        <div className="line-h" />
        <div className="line-v" />
      </div>

      <div className="card-content">{children}</div>
    </div>
  )
}

export { Card, CardCanvas }
