import { Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Box,
  Cpu,
  Fingerprint,
  Info,
  Layers,
  Palette,
  Sparkles,
} from "lucide-react"
import { useState } from "react"

import { ThemeProvider } from "@/shared/providers/theme-provider"
import { Badge } from "@/shared/ui/core/badge"
import { Button } from "@/shared/ui/core/button"
import { ModeToggle } from "@/shared/ui/system/mode-toggle"

import { AnimationsSection } from "./sections/animations-section"
import { BrandSection } from "./sections/brand-section"
import { ButtonsSection } from "./sections/buttons-section"
import { CardsSection } from "./sections/cards-section"
import { FeedbackSection } from "./sections/feedback-section"
import { IconsSection } from "./sections/icons-section"
import { TokensSection } from "./sections/tokens-section"

type SectionTab =
  | "all"
  | "brand"
  | "tokens"
  | "buttons"
  | "animations"
  | "cards"
  | "feedback"
  | "icons"

export function DesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState<SectionTab>("all")

  const tabs = [
    { id: "all", label: "All Modules", icon: Layers },
    { id: "brand", label: "Logo & Brand Mark", icon: Fingerprint },
    { id: "tokens", label: "Tokens & Colors", icon: Palette },
    { id: "buttons", label: "Buttons & Controls", icon: Box },
    { id: "animations", label: "Shaders & FX", icon: Sparkles },
    { id: "cards", label: "Cards & Containers", icon: Layers },
    { id: "feedback", label: "States & Feedback", icon: Info },
    { id: "icons", label: "Tech Icons", icon: Cpu },
  ]

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        {/* Top Sticky Bar */}
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Link>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-foreground">
                  Design System
                </span>
                <Badge
                  variant="secondary"
                  className="border-primary/20 font-mono text-[10px] text-primary uppercase"
                >
                  v2.0 • FSD
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ModeToggle />
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <div className="border-b border-border/60 bg-card/40 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
              // DESIGN SYSTEM & COMPONENT CATALOG
            </p>
            <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Engineering Design System
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              A comprehensive library of atomic primitives, micro-animations,
              shaders, and layout widgets built with React 19, Tailwind CSS v4,
              and Radix UI.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <Button
                    key={tab.id}
                    variant={isActive ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab(tab.id as SectionTab)}
                    className="gap-2 font-mono text-xs"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {tab.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <main className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6">
          {(activeTab === "all" || activeTab === "brand") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Logo & Brand Identity
              </h2>
              <BrandSection />
            </section>
          )}

          {(activeTab === "all" || activeTab === "tokens") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Design Tokens
              </h2>
              <TokensSection />
            </section>
          )}

          {(activeTab === "all" || activeTab === "buttons") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Buttons & Interactions
              </h2>
              <ButtonsSection />
            </section>
          )}

          {(activeTab === "all" || activeTab === "animations") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Shaders & Animation Effects
              </h2>
              <AnimationsSection />
            </section>
          )}

          {(activeTab === "all" || activeTab === "cards") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Cards & Structured Surfaces
              </h2>
              <CardsSection />
            </section>
          )}

          {(activeTab === "all" || activeTab === "feedback") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Feedback & System Indicators
              </h2>
              <FeedbackSection />
            </section>
          )}

          {(activeTab === "all" || activeTab === "icons") && (
            <section className="space-y-4">
              <h2 className="font-mono text-lg font-bold text-primary">
                # Tech Stack Icons Hub
              </h2>
              <IconsSection />
            </section>
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default DesignSystemShowcase
