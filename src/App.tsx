import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

import Navigation from './components/navigation/Navigation'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import PageTitle from './components/PageTitle'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero image={Headshot1}/>
        <Navigation />
        <PageTitle name="Home & News"/>
        <ContactForm />
      </div>
    )
  }
}

export default App
