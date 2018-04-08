import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <Header heroImage={Headshot1} />
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
