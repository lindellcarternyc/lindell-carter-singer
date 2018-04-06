import * as React from 'react'

import MonthBar from './MonthBar'
import CalendarItemList from './CalendarItemList'

import { MonthData } from './types'

interface CalendarMonthProps extends MonthData { }

const CalendarMonth = (props: CalendarMonthProps): JSX.Element => {
  const { month, year, events } = props
  return (
    <>
      <MonthBar month={month} year={year} />
      <CalendarItemList data={events} />
    </>
  )
}

export default CalendarMonth
