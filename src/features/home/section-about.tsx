/* ─── Tech stack badge ─── */
type TechItem = {
  label: string
  color?: string
  icon?: string
}

const techStack: TechItem[][] = [
  [
    { label: "TypeScript", icon: "TS", color: "#3178c6" },
    { label: "JavaScript", icon: "JS", color: "#f7df1e" },
    { label: "React", icon: "⚛", color: "#61dafb" },
    { label: "Next.js", icon: "N", color: "#ffffff" },
    { label: "TailwindCSS", icon: "~", color: "#38bdf8" },
    { label: "Node.js", icon: "⬡", color: "#6db33f" },
  ],
  [
    { label: "shadcn/ui", icon: "◈", color: "#ffffff" },
    { label: "Radix UI", icon: "◎", color: "#ffffff" },
    { label: "Motion", icon: "◐", color: "#ff6b6b" },
    { label: "TanStack", icon: "⧫", color: "#ef4444" },
    { label: "Redux", icon: "◉", color: "#764abc" },
    { label: "Zustand", icon: "Z", color: "#f97316" },
  ],
  [
    { label: "PostgreSQL", icon: "🐘", color: "#336791" },
    { label: "MongoDB", icon: "◓", color: "#4db33d" },
    { label: "MySQL", icon: "⬤", color: "#00758f" },
    { label: "Redis", icon: "R", color: "#dc382d" },
    { label: "Docker", icon: "◫", color: "#2496ed" },
    { label: "Git", icon: "⌥", color: "#f05032" },
  ],
  [
    { label: "Figma", icon: "◈", color: "#a259ff" },
    { label: "ChatGPT", icon: "✦", color: "#10a37f" },
    { label: "Claude", icon: "✧", color: "#d4a574" },
    { label: "Cursor", icon: "◇", color: "#ffffff" },
    { label: "GitHub", icon: "◉", color: "#ffffff" },
    { label: "Photoshop", icon: "Ps", color: "#31a8ff" },
  ],
]

const StackBadge = ({ item }: { item: TechItem }) => (
  <span
    className="inline-flex cursor-default items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-white/70 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white/90"
  >
    <span
      className="text-[11px] font-bold font-mono"
      style={{ color: item.color }}
    >
      {item.icon}
    </span>
    {item.label}
  </span>
)

/* ─── Hobby pill ─── */
const HobbyTag = ({ emoji, label }: { emoji: string; label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/55">
    <span>{emoji}</span>
    {label}
  </span>
)

/* ─── Main component ─── */
const SectionAbout = () => {
  return (
    <div className="flex flex-col gap-12 px-8 md:px-16">

      {/* ── Section header ── */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
          00 / About
        </span>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[55fr_45fr]">

        {/* LEFT – Bio */}
        <div className="flex flex-col gap-6">
          {/* ── Avatar hero block ── */}
          <div className="flex flex-col gap-4">
            {/* Large avatar */}
            <div className="relative w-fit">
              <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-white/15 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <img
                  src="/avatar.gif"
                  alt="Phong Phan"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Online status dot */}
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]">
                <span className="h-2 w-2 animate-ping rounded-full bg-emerald-300 opacity-75" />
              </span>
            </div>

            {/* Name + role */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white/95">Phong Phan</h3>
                {/* Verified */}
                <svg className="h-4 w-4 flex-shrink-0 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground/60">
                Fullstack Developer · Quang Binh, VN
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-mono text-[9px] tracking-wider text-emerald-400/90 uppercase">Open to work</span>
              </span>
            </div>
          </div>

          {/* Bio paragraphs */}
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Hi there! I'm{" "}
              <span className="font-medium text-white/90">Phong Phan</span>.
              My daily life revolves around coding, debugging, and tackling tech
              challenges. I'm a fast learner, always eager to explore new
              technologies, and I have a strong passion for problem-solving.
            </p>

            <p>
              🚀 I always try to learn and develop myself every day. Continuously
              learning and challenging myself will help me become a better
              programmer. I'm also very interested in{" "}
              <span className="text-white/75">sharing knowledge</span> — I
              believe that sharing helps everyone grow.
            </p>

            <p>
              With several years of experience in web development, I have
              participated in projects ranging from small sites to complex
              applications. My stack includes{" "}
              <span className="text-primary font-medium">
                HTML, CSS, JavaScript, React, Next.js, Node.js
              </span>
              , Headless CMS, and tools like Git & GitHub.
            </p>

            <p>
              I'm always open to opportunities that align with my skills and
              passions — whether it's an innovative startup, a groundbreaking
              project, or a top-notch team.{" "}
              <span className="text-white/80 font-medium">
                Let's build something amazing together! 🚀
              </span>
            </p>
          </div>

          {/* Hobbies */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40 uppercase">
              Beyond Coding
            </p>
            <div className="flex flex-wrap gap-2">
              <HobbyTag emoji="🏋️" label="Gym" />
              <HobbyTag emoji="⚽" label="Football" />
              <HobbyTag emoji="🧗" label="Mountain climbing" />
              <HobbyTag emoji="📚" label="Reading" />
              <HobbyTag emoji="✈️" label="Traveling" />
            </div>
          </div>
        </div>

        {/* RIGHT – Tech Stack */}
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white/90">
              Stack
            </h2>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground/50">
              Technologies I work with
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {techStack.map((row, ri) => (
              <div key={ri} className="flex flex-wrap gap-2">
                {row.map((item) => (
                  <StackBadge key={item.label} item={item} />
                ))}
              </div>
            ))}
          </div>

          {/* Years of experience stat */}
          <div className="mt-2 flex gap-6 border-t border-white/[0.06] pt-4">
            {[
              { num: "3+", label: "Years experience" },
              { num: "10+", label: "Projects built" },
              { num: "∞", label: "Bugs fixed 😅" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-xl font-bold text-white/90">{num}</span>
                <span className="font-mono text-[10px] text-muted-foreground/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionAbout
