import * as React from 'react'

interface LabelProps {
  text: string
}
const Label = (props: LabelProps): JSX.Element => {
  return (
    <label
      style={{
        display: 'block',
        fontSize: '0.75rem',
        marginBottom: '0.5rem'
      }}
    >{props.text}
    </label>
  )
}

export default Label