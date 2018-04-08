import * as React from 'react'

import PhotoGalleryImage from './PhotoGalleryImage'
import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'

interface PhotoGalleryGridProps {
  images: string[]
  breakpoint?: Breakpoint
}

const gridTemplateColumns = (breakpoint: Breakpoint = Breakpoint.Phone): string => {
  let repeat: number
  if ( breakpoint >= Breakpoint.Widescreen ) {
    repeat = 5
  } else if ( breakpoint >= Breakpoint.Desktop ) {
    repeat = 4
  } else if ( breakpoint >= Breakpoint.Tablet ) {
    repeat = 3
  } else if ( breakpoint >= Breakpoint.Phablet ) {
    repeat = 2
  } else {
    repeat = 1
  }

  return `repeat(${repeat}, 1fr)`
}
const PhotoGalleryGrid = (props: PhotoGalleryGridProps): JSX.Element => {
  const { images, breakpoint } = props
  return (
    <div
      style={{
        margin: '0 auto',
        width: 'max-content',
        border: '1px solid red',
        textAlign: 'center',
        display: 'grid',
        gridColumnGap: '1rem',
        gridRowGap: '1rem',
        gridTemplateColumns: gridTemplateColumns(breakpoint)
      }}
    >
    {images.map((image, idx) => {
      return (
        <PhotoGalleryImage 
          key={image + '_' + idx.toString(10)}
          src={image}
        />
      )
    })}
    </div>
  )
}

export default makeResponsiveComponent(PhotoGalleryGrid)