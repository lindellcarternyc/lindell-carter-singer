import * as React from 'react'

interface TextInputProps {
  name: string
  value: string
  onChange: (name: string, value: string) => void
  style: { [key: string]: string }
}
const TextInput = (props: TextInputProps): JSX.Element => {
  return (
    <input 
      style={props.style}
      onChange={(evt: React.SyntheticEvent<HTMLInputElement>) => {
        props.onChange(props.name, evt.currentTarget.value)
      }}
    />
  )
}

export default TextInput