import { motion } from "motion/react"

import { GridContainer } from "@/app/layouts"
import { SkeletonOne } from "@/shared/ui/animation/skeleton-hover"
import { iconComponents, type IconName, RenderIcon } from "@/shared/ui/icons"
import { SectionHeading } from "@/shared/ui/system/section-heading"

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
    "group inline-flex items-center gap-1.5 rounded border border-border bg-foreground/4 px-3 py-2 text-xs text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/8 hover:text-foreground"

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

const SectionAbout = () => {
  return (
    <>
      <GridContainer className="px-8 py-3" borderTop>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex w-full gap-3">
            <GridContainer showCrosshairs={false} borderTop={true}>
              <div className="h-30 w-30 overflow-hidden">
                <img
                  src="/avatar.gif"
                  alt="Phong Phan"
                  className="h-full w-full object-cover"
                />
              </div>
            </GridContainer>

            <div className="flex w-full flex-col gap-2">
              <GridContainer
                showCrosshairs={false}
                borderTop={true}
                className="w-full p-3"
              >
                <SectionHeading
                  id="about"
                  label="01 / About"
                  heading="Phong Phan"
                />
              </GridContainer>
              <GridContainer
                showCrosshairs={false}
                borderTop={true}
                className="w-full p-3"
              >
                <p className="font-mono text-[11px] tracking-wider text-muted-foreground/60">
                  Fullstack Developer · Viet Nam
                </p>
              </GridContainer>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <SkeletonOne
              text1="There are tons of awesome frameworks like React, Angular, Vue, and Svelte that can make your life... easier (or a complete mess, depending on your code)"
              text2="DELUSIONAL"
            />
          </div>
        </div>
      </GridContainer>

      <GridContainer showCrosshairs={false} className="p-8">
        <div className="flex flex-col gap-4 text-justify text-[16px] leading-relaxed text-white/80">
          <p>
            Hi there! I'm <span className="font-bold">Phong Phan</span>. My
            daily life revolves around coding, debugging, and tackling tech
            challenges. I'm a fast learner, always eager to explore new
            technologies, and I have a strong passion for problem-solving.
          </p>

          <p>
            I always try to learn and develop myself every day. Continuously
            learning and challenging myself will help me become a better
            programmer. I'm also very interested in{" "}
            <span className="font-semibold">sharing knowledge</span> — I believe
            that sharing helps everyone grow.
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
            <span className="font-medium">
              Let's build something amazing together!
            </span>
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-2">
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
      </GridContainer>

      <GridContainer borderTop className="px-8 py-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground uppercase">
          Tech Stack
        </h2>
      </GridContainer>
      <GridContainer showCrosshairs={false} className="p-8">
        <div className="flex flex-col gap-4">
          {techStack.map((row, ri) => (
            <div key={ri} className="flex flex-wrap gap-2">
              {row.map((item) => (
                <StackBadge key={item.label} item={item} />
              ))}
            </div>
          ))}
        </div>
      </GridContainer>
    </>
  )
}

export default SectionAbout
