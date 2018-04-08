import * as React from 'react'

import  makeHoverableComponent from './utils/hoverable' 

interface IconProps {
  name: string
  brand?: boolean
  color?: string
  fontSize?: string
}
export const Icon = (props: IconProps): JSX.Element => {
  const prefix = props.brand ? 'fab fa-' : 'fas fa-'
  const className = prefix + props.name
  return (
    <span 
      className={className}
      style={{
        color: props.color,
        fontSize: props.fontSize,
        transition: 'color 0.3s ease-in'
      }}
    />
  )
}

interface HoverableIconProps extends IconProps {
  active?: boolean
  hoverColor?: string
}

export const HoverableIcon = makeHoverableComponent(
  (props: HoverableIconProps) => {
    const { active, hoverColor, color, ...rest } = props
    const iconColor = active ? hoverColor : color
    return (
      <Icon color={iconColor} {...rest} />
    )
  }
)