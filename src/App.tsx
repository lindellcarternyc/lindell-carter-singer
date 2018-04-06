import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

import Navigation from './components/navigation/Navigation'
import Hero from './components/Hero'
// import ContactForm from './components/ContactForm'
import PageTitle from './components/PageTitle'
import Calendar from './components/calendar/Calendar'

import { MonthData } from './components/calendar/types'
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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero image={Headshot1}/>
        <Navigation />
        <PageTitle name="Home & News"/>
        {/* <ContactForm /> */}
        <Calendar 
          upcomingEvents={UpcomingEvents}
          pastEvents={PastEvents}
        />
      </div>
    )
  }
}

export default App
