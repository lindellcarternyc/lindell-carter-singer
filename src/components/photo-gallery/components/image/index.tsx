import * as React from 'react'

import Overlay from './Overlay'

const IMAGE_WIDTH = 175

interface ImageProps {
  src: string
  imageWidth: number
}
const Image = (props: ImageProps): JSX.Element => {
  const width = `${props.imageWidth}px`
  return (
    <div
      style={{
        position: 'relative',
        margin: '0 auto',
        width: width, height: width,
        background: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    >
      <Overlay imageWidth={IMAGE_WIDTH} />
    </div>
  )
}

export default Image