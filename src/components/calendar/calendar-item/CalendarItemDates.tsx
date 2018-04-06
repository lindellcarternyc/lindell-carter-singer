import * as React from 'react'

import { Color } from '../../../constants/styles'

interface CalendarItemDatesProps {
  dates: string[]
}

const CalendarItemDates = (props: CalendarItemDatesProps): JSX.Element => {
  const { dates } = props
  return (
    <ul
      style={{
        listStyle: 'none',
        marginBottom: '0.75rem'
      }}
    >{dates.map(date => {
      return (
        <li 
          key={date}
          style={{
            fontSize: '0.75rem',
            color: Color.White
          }}
        >{date}
        </li>
      )
    })}
    </ul>
  )
}

export default CalendarItemDates