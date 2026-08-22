import { Check, Copy, Sparkles, Terminal } from "lucide-react"
import { useState } from "react"

import { Button } from "@/shared/ui/core/button"
import { PPPixelMark } from "@/shared/ui/icons/pp-pixel-mark"

import { ShowcaseCard } from "../components/showcase-card"

export function BrandSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null)

  const copyCode = (type: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  const rawSvgCode = `<svg viewBox="0 0 96 64" width="96" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8H34V16H44V34H34V42H18V56H8V8ZM18 20H34V30H18V20Z" fill="currentColor" fill-rule="evenodd"/>
  <path d="M52 8H78V16H88V34H78V42H62V56H52V8ZM62 20H78V30H62V20Z" fill="currentColor" fill-rule="evenodd"/>
</svg>`

  return (
    <div className="space-y-6">
      <ShowcaseCard
        title="PP Pixel Brand Logo (8-Bit Stepped Grid)"
        description="Official geometric 8-bit monogram logo for Phong Phan. Precision pixel geometry with stepped corner chamfers and hollow counters."
        tag="Logo Mark"
      >
        <div className="flex flex-col gap-8">
          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Solid Foreground */}
            <div className="flex flex-col items-center justify-between rounded-lg border border-border bg-card p-5 text-center shadow-xs">
              <div className="flex h-24 items-center justify-center">
                <PPPixelMark size={56} className="text-foreground" />
              </div>
              <div className="mt-3 w-full border-t border-border/50 pt-3">
                <span className="font-mono text-xs font-semibold text-foreground">
                  Solid Monochrome
                </span>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Default text-foreground
                </p>
              </div>
            </div>

            {/* 2. Brand Primary Red */}
            <div className="flex flex-col items-center justify-between rounded-lg border border-border bg-card p-5 text-center shadow-xs">
              <div className="flex h-24 items-center justify-center">
                <PPPixelMark size={56} className="text-primary" />
              </div>
              <div className="mt-3 w-full border-t border-border/50 pt-3">
                <span className="font-mono text-xs font-semibold text-primary">
                  PP Primary Red
                </span>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  var(--pp-primary)
                </p>
              </div>
            </div>

            {/* 3. Cyberpunk Glow */}
            <div className="flex flex-col items-center justify-between rounded-lg border border-primary/30 bg-card p-5 text-center shadow-xs">
              <div className="flex h-24 items-center justify-center">
                <PPPixelMark
                  size={56}
                  variant="glow"
                  className="text-primary"
                />
              </div>
              <div className="mt-3 w-full border-t border-border/50 pt-3">
                <div className="flex items-center justify-center gap-1 font-mono text-xs font-semibold text-primary">
                  <Sparkles className="h-3 w-3" />
                  <span>Neon Glow</span>
                </div>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Interactive hover & hero
                </p>
              </div>
            </div>

            {/* 4. Blueprint Wireframe / Outline */}
            <div className="flex flex-col items-center justify-between rounded-lg border border-border bg-card p-5 text-center shadow-xs">
              <div className="flex h-24 items-center justify-center">
                <PPPixelMark
                  size={56}
                  variant="outline"
                  className="text-muted-foreground hover:text-foreground"
                />
              </div>
              <div className="mt-3 w-full border-t border-border/50 pt-3">
                <span className="font-mono text-xs font-semibold text-foreground">
                  Outline / Wireframe
                </span>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Technical blueprint style
                </p>
              </div>
            </div>
          </div>

          {/* Size Hierarchy Matrix */}
          <div className="rounded-lg border border-border bg-card/60 p-5">
            <h4 className="mb-4 font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Scale & Responsive Hierarchy
            </h4>
            <div className="flex flex-wrap items-end justify-between gap-6 overflow-x-auto py-2">
              {/* 20px */}
              <div className="flex flex-col items-center gap-2">
                <PPPixelMark size={20} className="text-foreground" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  20px (Mobile)
                </span>
              </div>

              {/* 28px */}
              <div className="flex flex-col items-center gap-2">
                <PPPixelMark size={28} className="text-foreground" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  28px (Favicon/Dock)
                </span>
              </div>

              {/* 36px */}
              <div className="flex flex-col items-center gap-2">
                <PPPixelMark size={36} className="text-primary" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  36px (Header)
                </span>
              </div>

              {/* 48px */}
              <div className="flex flex-col items-center gap-2">
                <PPPixelMark size={48} className="text-foreground" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  48px (Standard)
                </span>
              </div>

              {/* 64px */}
              <div className="flex flex-col items-center gap-2">
                <PPPixelMark size={64} className="text-primary" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  64px (Card)
                </span>
              </div>

              {/* 80px */}
              <div className="flex flex-col items-center gap-2">
                <PPPixelMark
                  size={80}
                  variant="glow"
                  className="text-primary"
                />
                <span className="font-mono text-[10px] text-muted-foreground">
                  80px (Hero Display)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Copy Snippets */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Terminal className="h-4 w-4 text-primary" />
              <span>Import:</span>
              <code className="rounded bg-muted px-2 py-0.5 text-foreground">
                {`import { PPPixelMark } from "@/shared/ui"`}
              </code>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  copyCode(
                    "react",
                    '<PPPixelMark size={36} className="text-primary" />'
                  )
                }
                className="gap-1.5 font-mono text-xs"
              >
                {copiedType === "react" ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>
                  {copiedType === "react" ? "Copied React!" : "Copy React JSX"}
                </span>
              </Button>

              <Button
                variant="default"
                size="sm"
                onClick={() => copyCode("svg", rawSvgCode)}
                className="gap-1.5 font-mono text-xs"
              >
                {copiedType === "svg" ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>
                  {copiedType === "svg" ? "Copied SVG!" : "Copy Raw SVG"}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </ShowcaseCard>
    </div>
  )
}
