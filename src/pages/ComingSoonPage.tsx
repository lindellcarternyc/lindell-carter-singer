import * as React from 'react'

import PageLayout from '../components/PageLayout'
import { Color } from '../constants/styles'

export default (props: { title: string }): JSX.Element => {
  return (
    <PageLayout title={props.title}>
      <div
        style={{
          padding: '3rem',
          background: Color.White,
          color: Color.DarkGrey
        }}
      >
        <h1 style={{fontSize: '2.5rem'}}>Coming Soon!</h1>
      </div>

    </PageLayout>
  )
}