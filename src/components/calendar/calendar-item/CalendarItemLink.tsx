import * as React from 'react'

import { Color } from '../../../constants/styles'

const CalendarItemLink = (): JSX.Element => {
  return (
    <p
      style={{
        color: Color.Blue,
        fontSize: '0.75rem'
      }}
    >
      Tickets & Info
    </p>
  )
}

export default CalendarItemLink