declare module '*.inline.svg' {
  import { FunctionComponent, SVGProps } from 'react'
  const content: FunctionComponent<SVGProps<SVGSVGElement>>
  export default content
}

declare module 'typography'
declare module 'typography-theme-doelger'
