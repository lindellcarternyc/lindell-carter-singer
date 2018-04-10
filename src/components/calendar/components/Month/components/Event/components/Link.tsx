import * as React from 'react'

import { Color } from '../../../../../../../styles/base'

const Link = (): JSX.Element => {
  return (
    <p
      style={{
        color: Color.BLUE,
        fontSize: '0.75rem'
      }}
    >
      Tickets & Info
    </p>
  )
}

export default Link