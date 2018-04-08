import * as React from 'react'

const PhotoGalleryImage = (props: { src: string }): JSX.Element => {
  const { src } = props
  return (
    <div 
      style={{
        width: '175px',
        height: '175px',
        border: '1px solid orange',
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        margin: '0 auto'
      }}
    />
  )
}

export default PhotoGalleryImage