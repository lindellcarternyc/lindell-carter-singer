import * as React from 'react'

import { Color } from '../../constants/styles'
import makeHoverableComponent from '../utils/hoverable'

interface CalendarSelectorProps {
  text: string
  active?: boolean
  onClick: () => void
}
const CalendarSelector = (props: CalendarSelectorProps): JSX.Element => {
  const { text, active } = props
  return (
    <li
      style={{
        fontSize: '0.75rem',
        display: 'inline-block',
        padding: '1rem',
        color: active ? Color.Blue : Color.DarkGrey,
        background: active ? Color.DarkGrey : undefined,
        transition: 'all 0.3s ease-in'
      }}
      onClick={props.onClick}
    >{text}
    </li>
  )
}

export default makeHoverableComponent(CalendarSelector)