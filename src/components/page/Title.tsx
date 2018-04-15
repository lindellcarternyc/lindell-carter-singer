import * as React from 'react'

import { Color } from '../../styles/base'

interface TitleProps {
  text: string
}
const Title = (props: TitleProps): JSX.Element => {
  return (
    <div>
      <h1
        style={{
          color: 'white',
          margin: '0.5rem 1rem',
          fontWeight: 100,
          display: 'inline-block',
          borderTop: `1px solid ${Color.DARK_GREY}`,
          borderBottom: `1px solid ${Color.DARK_GREY}`,
          padding: '0.75rem 1.5rem'
        }}
      >Lindell Carter | {props.text}
      </h1>
    </div>
  )
}

export default Title