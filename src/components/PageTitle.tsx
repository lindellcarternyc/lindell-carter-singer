import * as React from 'react'

import { Color } from '../constants/styles'

const PageTitleLine = (): JSX.Element => {
  return (
    <hr style={{borderColor: Color.LightGrey}}/>
  )
}
const PageTitle = (props: { name: string }): JSX.Element => {
  return (
    <div
      style={{
        display: 'inline-block'
      }}
    >
      <PageTitleLine />
      <h1
        style={{
          color: Color.LightGrey,
          margin: '0.5rem 1rem',
          fontWeight: 100,
          display: 'inline-block',
        }}
      >Lindell Carter / {props.name}
      </h1>
      <PageTitleLine />
    </div>
  )
}

export default PageTitle