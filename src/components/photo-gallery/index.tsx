import * as React from 'react'

import { Color } from '../../styles/base'

import ImageGrid from './components/image-grid'

interface PhotoGalleryProps {
  images: string[]
}
const PhotoGallery = (props: PhotoGalleryProps): JSX.Element => {
  return (
    <div
      style={{
        background: Color.DARK_GREY,
        padding: '1rem 2rem'
      }}
    ><ImageGrid images={props.images} />
    </div>
  )
}

export default PhotoGallery