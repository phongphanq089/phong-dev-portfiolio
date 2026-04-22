import { NoisyGlowText } from "../../ui/animation/noisy-glow-text"

export default function Footer() {
  return (
    <footer className="mt-20 border border-t bg-transparent px-4 pt-12">
      <NoisyGlowText
        text="PHONG PHAN"
        isFull
        glowColor="var(--color-primary-color)"
      />
    </footer>
  )
}
