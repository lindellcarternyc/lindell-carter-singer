import * as React from 'react'
import './App.css'

const Headshot1 = require('./assets/images/lindell_picture.jpg')

import Header from './components/Header'
import Footer from './components/Footer'
import PhotoGalleryPage from './pages/PhotoGalleryPage'

class App extends React.Component {
  render() {
    return (
      <>
        <Header heroImage={Headshot1} />
        <PhotoGalleryPage />
        <Footer />
      </>
    )
  }
}

export default App
