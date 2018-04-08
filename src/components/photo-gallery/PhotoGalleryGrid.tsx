import * as React from 'react'

import PhotoGalleryImage, { IMAGE_WIDTH }  from './PhotoGalleryImage'
import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'

interface PhotoGalleryGridProps {
  images: string[]
  breakpoint?: Breakpoint
}

const gridTemplateColumns = (breakpoint: Breakpoint = Breakpoint.Phone): string => {
  const repeat = breakpoint as number
  return `repeat(${repeat}, 1fr)`
}

const gridWidth = (breakpoint: Breakpoint = Breakpoint.Phone): string => {
  const factor = breakpoint as number
  return `calc(${factor * IMAGE_WIDTH}px + ${factor - 1}rem)`
}
const PhotoGalleryGrid = (props: PhotoGalleryGridProps): JSX.Element => {
  const { images, breakpoint } = props
  return (
    <div
      style={{
        margin: '0 auto',
        width: gridWidth(breakpoint),
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