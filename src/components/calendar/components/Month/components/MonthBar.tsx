import * as React from 'react'

import { Color } from '../../../../../styles/base'

const MonthBarPointer = (): JSX.Element => {
  return (
    <span 
      style={{
        position: 'absolute',
        width: '1rem', height: '1rem',
        background: Color.BLUE,
        top: 'calc(100% - 0.5rem)', left: '50%',
        transform: 'translateX(-50%) rotate(45deg)'
      }}
    />
  )
}

interface MonthBarProps {
  month: string
  year: string
}
const MonthBar = (props: MonthBarProps): JSX.Element => {
  return (
    <div
      style={{
        background: Color.BLUE,
        color: Color.DARK_GREY,
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        fontWeight: 100,
        position: 'relative'
      }}
    >
    {`${props.month}, ${props.year}`}
    <MonthBarPointer />
    </div>
  )
}

export default MonthBar