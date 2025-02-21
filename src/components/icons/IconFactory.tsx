import * as React from 'react'
import Icon from './Icon'

type RawProps = {
  children?: React.ReactNode
}

const ChevronDownRaw: React.FC<RawProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

type IconFactoryProps = {
  children?: React.ReactNode
  width: string
  height: string
  iconName: string
}

const IconFactory: React.FC<IconFactoryProps> = ({
  width,
  height,
  iconName,
}) => {
  let svg = null
  switch (iconName) {
    case 'chevron-down':
      svg = <ChevronDownRaw />
      break
    default:
      svg = <></>
  }
  return <Icon iconSvg={svg} width={width} height={height} />
}

export default IconFactory
