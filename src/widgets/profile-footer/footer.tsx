import { ArrowUpRight } from "lucide-react"
import React from "react"

import { GridContainer } from "@/app/layouts"
import { siteConfig } from "@/shared/config"
import { PhongPhanIsometric } from "@/shared/ui/animation"

import { coreTechnologies, inspriedBy, scocialLinks } from "./setting-footer"

const SocialItem = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex h-16 items-center justify-center gap-3 transition-colors hover:bg-accent/50 hover:text-pp-primary"
  >
    {icon}
    <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
      {label}
    </span>
  </a>
)

export default function Footer() {
  return (
    <footer className="w-full">
      <GridContainer borderTop className="px-4 py-6 md:px-8">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Core Technologies & Frameworks
          </h3>
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Deep gratitude to the remarkable open-source tools, design systems,
            and platforms that power this web engineering portfolio.
          </p>
        </div>
      </GridContainer>

      <GridContainer
        borderTop
        showCrosshairs={false}
        className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
      >
        {coreTechnologies.map((tech) => {
          const IconComp = tech.icon
          return (
            <a
              key={tech.name}
              href={tech.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between p-5 transition-colors duration-200 hover:bg-muted/40 sm:p-6 dark:hover:bg-white/[0.02]"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-card p-2 text-foreground shadow-2xs transition-all duration-200 group-hover:scale-105 group-hover:border-pp-primary/50 group-hover:text-pp-primary">
                    <IconComp className="size-5" />
                  </div>
                  <span className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-muted-foreground uppercase">
                    {tech.badge}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-sm font-bold text-foreground transition-colors group-hover:text-pp-primary">
                    <span>{tech.title}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3">
                <span className="font-mono text-[10px] text-muted-foreground/60 transition-colors group-hover:text-pp-primary">
                  {tech.href.replace(/^https?:\/\//, "")}
                </span>
                <span className="font-mono text-[9px] font-semibold text-muted-foreground/40 transition-colors group-hover:text-pp-primary">
                  VISIT →
                </span>
              </div>
            </a>
          )
        })}
      </GridContainer>

      <GridContainer borderTop className="px-4 py-10 md:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Inspired by{" "}
            {inspriedBy.map((item, index) => (
              <React.Fragment key={`${item.name}-${index}`}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-foreground transition-colors hover:text-pp-primary"
                >
                  {item.name}
                </a>
                {index < inspriedBy.length - 1 && " / "}
              </React.Fragment>
            ))}
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care by{" "}
            <span className="font-semibold text-foreground">
              {siteConfig.url.replace("https://", "")}
            </span>
            . The source code is available on{" "}
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-pp-primary"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </GridContainer>

      <GridContainer
        className="grid grid-cols-2 divide-x divide-border md:grid-cols-4"
        borderTop={true}
        showCrosshairs={false}
      >
        {scocialLinks.map((item, index) => (
          <SocialItem
            key={`${item.name}-${index}`}
            icon={item.icon}
            label={item.name}
            href={item.href}
          />
        ))}
      </GridContainer>

      {/* 5. 3D Isometric Art Banner */}
      <div className="relative w-full overflow-hidden py-6 sm:py-10">
        <PhongPhanIsometric padding />
      </div>
    </footer>
  )
}
