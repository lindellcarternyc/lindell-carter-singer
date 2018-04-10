import * as React from 'react'

import { MonthData } from '../components/calendar/types'
import Layout from '../components/PageLayout'
import Calendar from '../components/calendar'

const UpcomingEvents: MonthData[] = [
  {
    month: 'April',
    year: '2018',
    events: [
      {
        dates: ['04.13', '04.14'],
        title: 'Martina Arroyo Puccini Concert',
        location: 'Lang Recital Hall'
      }
    ]
  },
  {
    month: 'May',
    year: '2018',
    events: [
      {
        dates: ['05.08', '05.11', '05.19'],
        title: 'Verdi "AIDA" Radames',
        location: 'Our Lady of Perpetual Help'
      },
      {
        dates: ['05.25'],
        title: 'Lindell Carter in Recital',
        location: 'Opera America'
      }
    ]
  }
]

const PastEvents: MonthData[] = [
  {
    month: 'March',
    year: '2018',
    events: [
      {
        dates: ['03.25'],
        title: '"Madama Butterfly" - Pinkerton',
        location: 'Regina Opera'
      }
    ]
  }
]

const CalendarPage = (): JSX.Element => {
  return (
    <Layout title="Calendar">
      <Calendar 
        upcoming={UpcomingEvents}
        past={PastEvents}
      />
    </Layout>
  )
}

export default CalendarPage