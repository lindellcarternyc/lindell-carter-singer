import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

import Navigation from './components/navigation/Navigation'
import Hero from './components/Hero'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero image={Headshot1}/>
        <Navigation />
      </div>
    )
  }
}

export default App
