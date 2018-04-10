import * as React from 'react'

const Location = (props: { location: string }): JSX.Element => {
  return (
    <p
      style={{
        color: 'white', fontSize: '0.85rem',
        marginBottom: '1rem'
      }}
    >
      {props.location}
    </p>
  )
}

export default Location