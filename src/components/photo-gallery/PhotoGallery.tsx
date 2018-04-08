import * as React from 'react'

import { Color } from '../../constants/styles'
import PhotoGalleryGrid from './PhotoGalleryGrid'

const Headshot = require('../../assets/images/lindell_picture.jpg')

const Images = [
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
  Headshot, Headshot, Headshot,
]

const PhotoGalleryWrapper = (): JSX.Element => {
  return (
    <div
      style={{
        background: Color.DarkGrey,
        padding: '1rem 2rem'
      }}
    >
      <PhotoGalleryGrid images={Images}/>
    </div>
  )
}

export default () => {
  return (
    <PhotoGalleryWrapper />
  )
}