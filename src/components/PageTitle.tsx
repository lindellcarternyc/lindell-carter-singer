import * as React from 'react'

import { Color } from '../constants/styles'

const PageTitle = (props: { name: string }): JSX.Element => {
  return (
    <div
      style={{
        background: Color.White
      }}
    >
      <h1
        style={{
          color: Color.LightGrey,
          margin: '0.5rem 1rem',
          fontWeight: 100,
          display: 'inline-block',
          borderTop: `1px solid ${Color.LightGrey}`,
          borderBottom: `1px solid ${Color.LightGrey}`,
          padding: '0.75rem 1.5rem'
        }}
      >Lindell Carter / {props.name}
      </h1>
    </div>
  )
}

export default PageTitle