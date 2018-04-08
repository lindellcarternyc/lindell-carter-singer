import * as React from 'react'

import { Color } from '../../constants/styles'
import PhotoGalleryGrid from './PhotoGalleryGrid'

const PhotoGallery = (props: { images: string[] }): JSX.Element => {
  const { images } = props
  return (
    <div
      style={{
        background: Color.DarkGrey,
        padding: '1rem 2rem'
      }}
    >
      <PhotoGalleryGrid images={images}/>
    </div>
  )
}

export default PhotoGallery