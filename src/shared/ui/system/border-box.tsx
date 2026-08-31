const BorderBox = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex h-full w-full items-center justify-center p-10">
    {/* Top left corner */}
    <span className="absolute top-0 -left-[0.5px] z-30 block size-6 border-t border-l border-muted-foreground" />
    {/* Top right corner */}
    <span className="absolute -top-px -right-px z-30 block size-6 border-t border-r border-muted-foreground" />
    {/* Bottom left corner */}
    <span className="absolute -bottom-px -left-[0.5px] z-30 block size-6 border-b border-l border-muted-foreground" />
    {/* Bottom right corner */}
    <span className="absolute -right-px -bottom-px z-30 block size-6 border-r border-b border-muted-foreground" />
    {children}
  </div>
)

export default BorderBox
