import { motion } from "motion/react"

import { GridSection } from "@/components/layout/profile/grid-layout"
import { SkeletonOne } from "@/components/ui/animation/skeleton-hover"
import {
  iconComponents,
  type IconName,
  RenderIcon,
} from "@/components/ui/icons"
import { SectionHeading } from "@/components/ui/section-heading"

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
    { label: "Tanstack", icon: "tanstack", link: "https://tanstack.com/" },
    {
      label: "React Navigation",
      icon: "reactnavigation",
      link: "https://reactnavigation.org/",
    },
    {
      label: "shadcn-ui",
      icon: "shadcnui",
      link: "https://shadcn.com/",
    },
    {
      label: "Motion",
      icon: "motion",
      link: "https://www.framer.com/motion/",
    },
    {
      label: "NestJS",
      icon: "nestjs",
      link: "https://nestjs.com/",
    },
    {
      label: "Fastify",
      icon: "fastify",
      link: "https://www.fastify.io/",
    },
    {
      label: "Material UI",
      icon: "materialui",
      link: "https://material.io/",
    },
    {
      label: "Refine",
      icon: "refine",
      link: "https://refine.dev/",
    },
    {
      label: "Sanity",
      icon: "sanity",
      link: "https://www.sanity.io/",
    },
    {
      label: "Vite",
      icon: "vite",
      link: "https://vitejs.dev/",
    },
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
const HobbyTag = ({ label }: { label: string }) => (
  <motion.span
    whileHover={{
      y: -2,
      scale: 1.03,
      borderColor: "rgba(220, 38, 38, 0.4)",
      backgroundColor: "rgba(220, 38, 38, 0.05)",
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-foreground/3 px-3.5 py-1 text-[11px] text-muted-foreground/80 transition-colors duration-300 hover:text-foreground"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />
    {label}
  </motion.span>
)

/* ─── Main component ─── */
const SectionAbout = () => {
  return (
    <>
      {/* ── Section header ── */}
      <GridSection
        className="px-8 py-5 md:px-16"
        borderTop
        showCrosshairs={false}
      >
        <SectionHeading id="about" label="01 / About" heading="About" />
      </GridSection>

      {/* ── 2-column layout ── */}
      <GridSection
        columns={2}
        className="px-4 py-12 md:px-8"
        borderTop={false}
        showCrosshairs={false}
      >
        {/* LEFT – Bio */}
        <div className="flex flex-col gap-6 pr-0 max-md:mb-10 md:pr-4">
          {/* ── Avatar hero block ── */}
          <div className="flex items-center gap-4">
            {/* Large avatar */}
            <div className="relative w-fit">
              <div className="h-30 w-30 overflow-hidden rounded-2xl border-2 border-border shadow-[0_0_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_40px_rgba(255,255,255,0.06)]">
                <img
                  src="/avatar.png"
                  alt="Phong Phan"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Online status dot */}
              <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-primary shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                <span className="h-2 w-2 animate-ping rounded-full bg-white opacity-75" />
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
                Fullstack Developer · Viet Nam
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
              <HobbyTag label="Gym" />
              <HobbyTag label="Football" />
              <HobbyTag label="Mountain climbing" />
              <HobbyTag label="Reading" />
              <HobbyTag label="Traveling" />
            </div>
          </div>
        </div>

        {/* RIGHT – Tech Stack */}
        <div className="flex flex-col gap-5 pl-0 md:pl-8">
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

          {/* Interactive Chat Showcase */}
          <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-border/80 bg-muted/10 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-border/50 pb-2">
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground/60 uppercase">
                Interactive Showcase
              </span>
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="absolute h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500 opacity-75" />
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <SkeletonOne
                text1="There are tons of awesome frameworks like React, Angular, Vue, and Svelte that can make your life... easier (or a complete mess, depending on your code)! 😜"
                text2="I LOVE JAVASCRIPT"
              />
              <SkeletonOne
                text1="Keep things simple with JavaScript"
                text2="DELUSIONAL 🤯"
              />
            </div>
          </div>
        </div>
      </GridSection>
    </>
  )
}

export default SectionAbout
