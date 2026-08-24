import React from "react"

import { GridContainer } from "@/app/layouts"
import { PhongPhanIsometric } from "@/shared/ui/animation"

import { inspriedBy, scocialLinks } from "./setting-footer"

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
    className="flex h-16 items-center justify-center gap-3 transition-colors hover:bg-accent/50"
  >
    {icon}
    <span className="font-mono text-[10px] tracking-widest uppercase opacity-50">
      {label}
    </span>
  </a>
)

export default function Footer() {
  return (
    <div>
      <GridContainer className="px-8 py-12 md:px-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Inspired by{" "}
            {inspriedBy.map((item, index) => (
              <React.Fragment key={`${item.name}-${index}`}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
                {index < inspriedBy.length - 1 && " / "}
              </React.Fragment>
            ))}
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care by
            <span className="font-semibold text-foreground"> phogphan.dev</span>
            . The source code is available on{" "}
            <a
              href="https://github.com/phongphanq089/phong-dev-portfiolio"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-primary"
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

      <div className="relative w-full overflow-hidden py-6 sm:py-10">
        <PhongPhanIsometric padding />
      </div>
    </div>
  )
}
