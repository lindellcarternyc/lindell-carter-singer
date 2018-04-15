import * as React from 'react'
import './App.css'

import { Routes } from './constants/routes'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { BrowserRouter as Router } from 'react-router-dom'
// import MobileNavigation from './components/navigation/mobile-navigation'

const BackgroungImage = require('./assets/images/casual1.jpg')

class App extends React.Component {
  render() {
    return (
      <div 
        style={{
          position: 'relative',
          background: `url(${BackgroungImage})`,
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      >
        <Header routes={Routes} />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default () => {
  return (
    <Router>
      <App />
    </Router>
  )
}
