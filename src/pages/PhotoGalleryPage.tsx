import * as React from 'react'

const Headshot = require('../assets/images/lindell_picture.jpg')
const Casual = require('../assets/images/casual1.jpg')
const Img1 = require('../assets/images/img1.jpg')
const Img2 = require('../assets/images/img2.jpg')
const Img3 = require('../assets/images/img3.jpg')
const Img4 = require('../assets/images/img4.jpg')
const Img5 = require('../assets/images/img5.jpg')
const Img6 = require('../assets/images/img6.jpg')
const Img7 = require('../assets/images/img7.jpg')

import Page from '../components/page'
import PhotoGallery from '../components/photo-gallery'

const Images = [
  Headshot, Casual,
  Img1, Img2, Img3, Img4,
  Img5, Img6, Img7
]

const PhotoGalleryPage = (): JSX.Element => {
  return (
    <Page>
      <PhotoGallery images={Images}/>
    </Page>
  )
}

export default PhotoGalleryPage