import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

// import Navigation from './components/navigation/Navigation'
// import Hero from './components/Hero'
// import ContactForm from './components/ContactForm'
// import PageTitle from './components/PageTitle'
// import Calendar from './components/calendar/Calendar'
import Header from './components/Header'
import Footer from './components/Footer'
import CalendarPage from './pages/CalendarPage'
// import HomePage from './pages/HomePage'
// import Layout from './components/Layout'

class App extends React.Component {
  render() {
    return (
      <>
        <Header heroImage={Headshot1} />
        <CalendarPage />
        <Footer />
      </>
    )
  }
}

export default App
