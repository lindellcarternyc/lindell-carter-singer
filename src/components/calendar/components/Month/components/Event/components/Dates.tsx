import * as React from 'react'

const Dates = (props: { dates: string[] }): JSX.Element => {
  return (
    <ul
      style={{
        listStyle: 'none',
        marginBottom: '0.75rem'
      }}
    >{props.dates.map(date => {
      return (
        <li 
          key={date}
          style={{
            fontSize: '0.75rem',
            color: 'white'
          }}
        >{date}
        </li>
      )
    })}
    </ul>
  )
}

export default Dates