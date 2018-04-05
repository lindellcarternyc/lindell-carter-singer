import * as React from 'react'

import { Color } from '../../constants/styles'

export interface NavigationItemProps {
  text: string
  active?: boolean
  padded?: boolean
}
const NavigationItem = (props: NavigationItemProps): JSX.Element => {
  const { text, active, padded } = props
  const padding = padded === true
  ? {
    padding: '1rem 1rem'
  } : {
    padding: '1rem 0'
  }

  return (
    <li
      style={{
        borderBottom: `1px solid ${Color.DarkGrey}`,
        fontSize: '0.75rem',
        backgroundColor: active ? Color.DarkGrey : undefined,
        color: active ? Color.Blue : Color.DarkGrey,
        transition: 'all 0.3s ease-in',
        ...padding
      }}
    >
      {text}
    </li>
  )
}

export default NavigationItem