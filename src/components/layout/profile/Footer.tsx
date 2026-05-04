export default function Footer() {
  return (
    // <footer className="mt-20 border border-t bg-transparent px-4 pt-12">
    //   <NoisyGlowText
    //     text="PHONG PHAN"
    //     isFull
    //     glowColor="var(--color-primary-color)"
    //   />
    // </footer>
    <footer className="flex h-8 items-center justify-between border-t border-border bg-background/40 px-6 text-[10px] text-muted-foreground backdrop-blur-md">
      <div className="flex items-center gap-4">
        <span className="text-emerald-500/80">
          {">"} const developer = {"{ passion: true, coffee: ☕ }"};
        </span>
      </div>
      <div>
        <span>© 2024 PHONGPHAN.DEV - ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  )
}
