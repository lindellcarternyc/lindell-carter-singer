import * as React from 'react'

import makeHoverableComponent from '../../../utils/hoverable'

interface OverlayProps {
  imageWidth: number
  active?: boolean
}
const Overlay = (props: OverlayProps): JSX.Element => {
  const width = `${props.imageWidth}px`
  return (
    <div
      style={{
        position: 'absolute',
        width: width, height: width,
        background: 'black',
        opacity: props.active ? 0.4 : 0,
        transition: 'opacity 0.3s ease-in'
      }}
    />
  )
}

export default makeHoverableComponent(Overlay)