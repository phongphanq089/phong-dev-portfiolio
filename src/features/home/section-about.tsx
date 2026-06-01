import {
  iconComponents,
  type IconName,
  RenderIcon,
} from "@/components/ui/icons"

/* ─── Tech stack badge ─── */
type TechItem = {
  label: string
  icon?: IconName
  link?: string
}

const techStack: TechItem[][] = [
  [
    {
      label: "TypeScript",
      icon: "typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      label: "JavaScript",
      icon: "javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { label: "React", icon: "react", link: "https://react.dev/" },
    { label: "Next.js", icon: "nextjs", link: "https://nextjs.org/" },
    {
      label: "TailwindCSS",
      icon: "tailwind",
      link: "https://tailwindcss.com/",
    },
    { label: "Node.js", icon: "node", link: "https://nodejs.org/" },
    { label: "11ty", icon: "ElevenTy", link: "https://www.11ty.dev/" },
    {
      label: "Zustand",
      icon: "zustand",
      link: "https://zustand-demo.pmnd.rs/",
    },
    {
      label: "PostgreSQL",
      icon: "postgres",
      link: "https://www.postgresql.org/",
    },
    { label: "MongoDB", icon: "mongodb", link: "https://www.mongodb.com/" },
    { label: "GitHub", icon: "github", link: "https://github.com/" },
  ],
]

const StackBadge = ({ item }: { item: TechItem }) => {
  const hasSvgIcon = item.icon && item.icon in iconComponents

  const content = (
    <>
      {hasSvgIcon ? (
        <RenderIcon
          name={item.icon as IconName}
          size={14}
          className="transition-transform duration-200 group-hover:scale-110"
        />
      ) : (
        <span className="font-mono text-[11px] font-bold">{item.icon}</span>
      )}
      <span>{item.label}</span>
    </>
  )

  const className =
    "group inline-flex items-center gap-1.5 rounded border border-border bg-foreground/4 px-2.5 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/8 hover:text-foreground"

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-pointer hover:border-primary/40 hover:bg-primary/3 hover:text-primary`}
      >
        {content}
      </a>
    )
  }

  return <span className={`${className} cursor-default`}>{content}</span>
}

/* ─── Hobby pill ─── */
const HobbyTag = ({ emoji, label }: { emoji: string; label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/3 px-3 py-1 text-[11px] text-muted-foreground/80">
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
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[55fr_45fr]">
        {/* LEFT – Bio */}
        <div className="flex flex-col gap-6">
          {/* ── Avatar hero block ── */}
          <div className="flex flex-col gap-4">
            {/* Large avatar */}
            <div className="relative w-fit">
              <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-border shadow-[0_0_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <img
                  src="/avatar.gif"
                  alt="Phong Phan"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Online status dot */}
              <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]">
                <span className="h-2 w-2 animate-ping rounded-full bg-emerald-300 opacity-75" />
              </span>
            </div>

            {/* Name + role */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  Phong Phan
                </h3>
                {/* Verified */}
                <svg
                  className="h-4 w-4 shrink-0 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-mono text-[11px] tracking-wider text-muted-foreground/60">
                Fullstack Developer · Quang Binh, VN
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-mono text-[9px] tracking-wider text-emerald-400/90 uppercase">
                  Open to work
                </span>
              </span>
            </div>
          </div>

          {/* Bio paragraphs */}
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-foreground">
            <p>
              Hi there! I'm{" "}
              <span className="font-bold text-foreground">Phong Phan</span>. My
              daily life revolves around coding, debugging, and tackling tech
              challenges. I'm a fast learner, always eager to explore new
              technologies, and I have a strong passion for problem-solving.
            </p>

            <p>
              🚀 I always try to learn and develop myself every day.
              Continuously learning and challenging myself will help me become a
              better programmer. I'm also very interested in{" "}
              <span className="font-semibold text-foreground">
                sharing knowledge
              </span>{" "}
              — I believe that sharing helps everyone grow.
            </p>

            <p>
              With several years of experience in web development, I have
              participated in projects ranging from small sites to complex
              applications. My stack includes{" "}
              <span className="font-bold text-primary">
                HTML, CSS, JavaScript, React, Next.js, Node.js
              </span>
              , Headless CMS, and tools like Git & GitHub.
            </p>

            <p>
              I'm always open to opportunities that align with my skills and
              passions — whether it's an innovative startup, a groundbreaking
              project, or a top-notch team.{" "}
              <span className="font-medium text-foreground">
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
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
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
          <div className="mt-2 flex gap-6 border-t border-border pt-4">
            {[
              { num: "3+", label: "Years experience" },
              { num: "10+", label: "Projects built" },
              { num: "∞", label: "Bugs fixed 😅" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-xl font-bold text-foreground">{num}</span>
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
