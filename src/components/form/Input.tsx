import * as React from 'react'

import Label from './Label'

interface InputProps {
  label: string
  type?: 'email' | 'textarea'
}
const Input = (props: InputProps): JSX.Element => {
  const style = {
    width: '100%',
    padding: '0.75rem'
  }
  const ipt = props.type === 'textarea' 
    ? (
      <textarea 
        rows={10}
        style={style}
      />
    ) : (
      <input 
        style={style}
        type={props.type}
      />
    )
  return (
    <div
      style={{marginBottom: '1rem'}}
    >
      <Label text={props.label} />
      {ipt}
    </div>
  )
}

export default Input