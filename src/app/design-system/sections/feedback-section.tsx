import { Badge } from "@/shared/ui/core/badge"
import { Checkbox } from "@/shared/ui/core/checkbox"
import { Separator } from "@/shared/ui/core/separator"
import { ModeToggle } from "@/shared/ui/system/mode-toggle"
import { Scales } from "@/shared/ui/system/scales"
import { SectionEmptyState } from "@/shared/ui/system/section-empty-state"

import { ShowcaseCard } from "../components/showcase-card"

export function FeedbackSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ShowcaseCard
        title="Status Badges"
        description="Informational, status, and tag indicators"
        tag="Core"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Selection & Toggles"
        description="Theme mode switcher & custom styled checkboxes"
        tag="Controls"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" defaultChecked />
            <label
              htmlFor="terms"
              className="cursor-pointer font-mono text-xs text-foreground"
            >
              Active State
            </label>
          </div>
          <Separator orientation="vertical" className="h-6" />
          <ModeToggle />
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Ruler & Scale Markers"
        description="Blueprint measuring tape / scale indicators"
        tag="System"
      >
        <div className="flex h-12 w-full max-w-xs items-center justify-center overflow-hidden rounded-md border border-border bg-background p-2">
          <Scales size={6} className="rounded-sm" />
        </div>
      </ShowcaseCard>

      <ShowcaseCard
        title="Section Empty / WIP State"
        description="Branded dashed placeholder with blinking cursor"
        tag="System"
        className="md:col-span-2"
      >
        <div className="w-full max-w-md">
          <SectionEmptyState
            title="Module in Progress"
            subtitle="This component is being calibrated with system tokens."
          />
        </div>
      </ShowcaseCard>
    </div>
  )
}
