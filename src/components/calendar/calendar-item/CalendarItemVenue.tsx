import * as React from 'react'

import { Color } from '../../../constants/styles'

const CalendarItemVenue = (props: { location: string }): JSX.Element => {
  return (
    <p
      style={{
        color: Color.White, fontSize: '0.85rem',
        marginBottom: '1rem'
      }}
    >{props.location}
    </p>
  )
}

export default CalendarItemVenue