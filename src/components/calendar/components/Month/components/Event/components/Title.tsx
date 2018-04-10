import * as React from 'react'

import { Color } from '../../../../../../../styles/base'

interface TitleProps {
  text: string
  active?: boolean
}
const Title = (props: TitleProps): JSX.Element => {
  const { text, active } = props

  return (
    <h4
      style={{
        color: active ? Color.BLUE : Color.WHITE,
        textTransform: 'uppercase',
        fontSize: '0.95rem',
        marginBottom: '1rem',
        transition: 'color 0.3s ease-in'
      }}
    >{text}
    </h4>
  )
}

export default Title