import * as React from 'react'

const Headshot = require('../assets/images/lindell_picture.jpg')

import PageLayout from '../components/PageLayout'
import PhotoGallery from '../components/photo-gallery/PhotoGallery'

const Images = [
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
]

const PhotoGalleryPage = (): JSX.Element => {
  return (
    <PageLayout title="Gallery">
      <PhotoGallery images={Images}/>
    </PageLayout>
  )
}

export default PhotoGalleryPage