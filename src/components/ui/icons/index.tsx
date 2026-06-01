import React from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

// Import individual icon components
import { ElevenTy } from "./11ty"
import { Code } from "./code"
import { External } from "./external"
import { GitHub } from "./github"
import { JavaScript } from "./javascript"
import { MongoDB } from "./mongodb"
import { NextJS } from "./nextjs"
import { NodeJS } from "./node"
import { PostgreSQL } from "./postgres"
import { Python } from "./python"
import { ReactIcon } from "./react"
import { Tailwind } from "./tailwind"
import { TypeScript } from "./typescript"
import { Zustand } from "./zustand"

export const iconComponents = {
  github: GitHub,
  react: ReactIcon,
  ElevenTy: ElevenTy,
  typescript: TypeScript,
  javascript: JavaScript,
  tailwind: Tailwind,
  nextjs: NextJS,
  node: NodeJS,
  postgres: PostgreSQL,
  mongodb: MongoDB,
  python: Python,
  external: External,
  code: Code,
  zustand: Zustand,
} as const

export type IconName = keyof typeof iconComponents

interface RenderIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number | string
}

export const RenderIcon: React.FC<RenderIconProps> = ({
  name,
  size = 24,
  className,
  ...props
}) => {
  const IconComponent = iconComponents[name]
  if (!IconComponent) return null

  return <IconComponent size={size} className={className} {...props} />
}

export default RenderIcon
