import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

const Hero = (): JSX.Element => {
  return (
    <div 
      style={{
        background: `url(${Headshot1})`,
        backgroundSize: 'cover',
        width: '100%',
        maxWidth: '800px',
        height: '100vh',
        maxHeight: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin: '0 auto'
      }}
    />
  )
}

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul
        style={{border: '1px solid red'}}
      >
        <li>Home / News</li>
        <li>Calendar</li>
      </ul>
    </nav>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Navigation />
      </div>
    )
  }
}

export default App
