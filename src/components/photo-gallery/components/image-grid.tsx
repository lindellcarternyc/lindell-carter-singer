import * as React from 'react'

import { Breakpoint, makeResponsiveComponent } from '../../utils/responsive'

import Image from './image'

const IMAGE_WIDTH = 175

const gridTemplateColumns = (breakpoint: Breakpoint = Breakpoint.Phone): string => {
  const repeat = breakpoint as number
  return `repeat(${repeat}, 1fr)`
}

const gridWidth = (breakpoint: Breakpoint = Breakpoint.Phone): string => {
  const factor = breakpoint as number
  return `calc(${factor * IMAGE_WIDTH}px + ${factor - 1}rem)`
}

interface ImageGridProps {
  images: string[]
  breakpoint?: Breakpoint
  selectImage?: (idx: number) => void
}
const ImageGrid = (props: ImageGridProps): JSX.Element => {
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'grid',
        width: gridWidth(props.breakpoint),
        gridTemplateColumns: gridTemplateColumns(props.breakpoint),
        gridColumnGap: '1rem',
        gridRowGap: '1rem'
      }}
    >{props.images.map((image, idx) => {
      return (
        <Image 
          key={`_${idx.toString(10)}--${image}`}
          src={image}
          imageWidth={IMAGE_WIDTH}
          onClick={() => {
            if ( props.selectImage ) {
              props.selectImage(idx)
            }
          }}
        />
      )
    })}
    </div>
  )
}

export default makeResponsiveComponent(ImageGrid)