import * as React from 'react'

import MonthBar from './components/MonthBar'
import Event, { EventProps } from './components/Event'

export interface MonthProps {
  month: string
  year: string
  events: EventProps[]
}

const Month = (props: MonthProps): JSX.Element => {
  const { month, year, events } = props
  return (
    <>
      <MonthBar month={month} year={year}/>
      {events.map(event => {
        return (
          <Event key={event.title} {...event}/>
        )
      })}
    </>
  )
}

export default Month