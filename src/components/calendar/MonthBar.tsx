import * as React from 'react'

import { Color } from '../../constants/styles' 

const MonthBar = (props: { month: string, year: string }): JSX.Element => {
  const date = `${props.month}, ${props.year}`
  return (
    <div
      style={{
        background: Color.Blue,
        color: Color.DarkGrey,
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        fontWeight: 100,
        position: 'relative'
      }}
    >{date}
      <span 
        style={{
          position: 'absolute',
          width: '1rem', height: '1rem',
          background: Color.Blue,
          top: 'calc(100% - 0.5rem)', left: '50%',
          transform: 'translateX(-50%) rotate(45deg)' 
        }}
      />
    </div>
  )
}

export default MonthBar