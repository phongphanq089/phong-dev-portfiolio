import { GridContainer } from "@/app/layouts"
import { TECH_STACK } from "@/shared/config"
import { iconComponents } from "@/shared/ui"

const SectionTechStack = () => {
  return (
    <>
      <GridContainer borderTop className="px-8 py-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground uppercase">
          Tech Stack
        </h2>
      </GridContainer>
      <GridContainer showCrosshairs={false} className="p-8">
        <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {TECH_STACK.map(({ label, icon, link }) => {
            const IconComp = iconComponents[icon]
            return (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${label} official website`}
                className="group relative flex cursor-pointer flex-col items-center justify-center rounded-md border border-border/50 bg-card p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:shadow-[0_4px_16px_rgba(220,38,38,0.12)]"
              >
                <div className="flex h-8 w-8 items-center justify-center text-foreground transition-all duration-200 group-hover:scale-110 group-hover:text-primary">
                  {IconComp ? <IconComp className="h-6 w-6" /> : null}
                </div>
                <span className="mt-2 w-full truncate text-center text-[10px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {label}
                </span>
              </a>
            )
          })}
        </div>
      </GridContainer>
    </>
  )
}

export default SectionTechStack
