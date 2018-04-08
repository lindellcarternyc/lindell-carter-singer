import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

import Header from './components/Header'
import Footer from './components/Footer'
// import PhotoGalleryPage from './pages/PhotoGalleryPage'
import CalendarPage from './pages/CalendarPage'

class App extends React.Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <Header heroImage={Headshot1} />
        {/* <PhotoGalleryPage /> */}
        <CalendarPage />
        <Footer />
      </div>
    )
  }
}

export default App
