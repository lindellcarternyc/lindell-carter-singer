import * as React from 'react'

import Overlay from './Overlay'

const IMAGE_WIDTH = 175

interface ImageProps {
  src: string
  imageWidth: number
  onClick?: () => void
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
      onClick={() => {
        if ( props.onClick ) {
          props.onClick()
        }
      }}
    >
      <Overlay imageWidth={IMAGE_WIDTH} />
    </div>
  )
}

export default Image