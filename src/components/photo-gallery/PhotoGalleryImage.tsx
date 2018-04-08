import * as React from 'react'
import makeHoverableComponent from '../utils/hoverable'

export const IMAGE_WIDTH = 175

interface PhotoGalleryImageProps {
  src: string
  active?: boolean
}
const PhotoGalleryImage = (props: PhotoGalleryImageProps): JSX.Element => {
  const { src, active } = props
  const dimensions = {
    width: `${IMAGE_WIDTH}px`,
    height: `${IMAGE_WIDTH}px`
  }
  return (
    <div 
      style={{
        ...dimensions,
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0,
          ...dimensions,
          background: active ? 'rgba(0, 0, 0, 0.4)' : undefined,
          transition: 'background 0.3s ease-in',
        }}
      />
    </div>
  )
}

export default makeHoverableComponent(PhotoGalleryImage)