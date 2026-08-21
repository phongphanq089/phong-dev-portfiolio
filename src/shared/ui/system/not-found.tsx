import { useRouter } from "@tanstack/react-router"

import { CreepyButton } from "@/shared/ui/animation/creepy-button"
import { DottedGlowBackground } from "@/shared/ui/animation/dotted-glow-background"

export function NotFound({ children }: { children?: React.ReactNode }) {
  const router = useRouter()
  return (
    <div className="toio-404-container relative animate-in duration-1000 fade-in">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <div className="toio-404-display">
        <span className="toio-404-number select-none">4</span>
        <div className="toio-404-zero-wrapper">
          <span className="toio-404-number select-none">0</span>
          <div className="toio-404-content">
            <h2 className="toio-404-title text-primary select-none">
              Page Not Available
            </h2>
            <div className="toio-404-sub text-primary select-none">
              {children || (
                <p>
                  Sorry, this page isn't available anymore or an error occurred.
                </p>
              )}
            </div>
          </div>
        </div>
        <span className="toio-404-number select-none">4</span>
      </div>

      <div className="absolute right-0 bottom-10 left-0 flex justify-center">
        <CreepyButton type="button" onClick={() => router.history.back()}>
          Go Back
        </CreepyButton>
      </div>
    </div>
  )
}
