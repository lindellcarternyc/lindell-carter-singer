import * as React from 'react'

import Label from './Label'
import TextArea from './TextArea'
import TextInput from './TextInput'

interface InputProps {
  label: string
  type?: 'email' | 'textarea'
  onChange: ( name: string, value: string ) => void
  name: string
  value: string
}
const Input = (props: InputProps): JSX.Element => {
  const style = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '0.75rem'
  }
  const { label, type, ...rest } = props 
  const ipt = props.type === 'textarea' 
    ? (
      <TextArea style={style} {...rest} />
    ) : (
      <TextInput style={style} {...rest} />
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