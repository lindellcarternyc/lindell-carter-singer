import * as React from 'react'

import CalendarItem from './calendar-item/CalendarItem'

import { EventData } from './types'

interface CalendarItemListProps {
  data: EventData[]
}
const CalendarItemList = (props: CalendarItemListProps): JSX.Element => {
  return (
    <>
      {props.data.map((itemData, idx) => {
        const { dates, title, location } = itemData
        return (
          <CalendarItem 
            key={title + '_' + dates[0]}
            dates={dates}
            title={title}
            location={location}
          />
        )
      })}
    </>
  )
}

export default CalendarItemList