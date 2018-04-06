import * as React from 'react'

import { Color } from '../../../constants/styles'

interface CalendarItemTitleProps {
  text: string
  active?: boolean
}
const CalendarItemTitle = (props: CalendarItemTitleProps): JSX.Element => {
  const { text, active } = props
  return (
    <h4
      style={{
        color: active ? Color.Blue : Color.White,
        textTransform: 'uppercase',
        fontSize: '0.95rem',
        marginBottom: '1rem',
        transition: 'color 0.3s ease-in'
      }}
    >{text}
    </h4>
  )
}

export default CalendarItemTitle