import * as React from 'react'

interface TextAreaProps {
  name: string
  value: string
  style: { [key: string]: string  }
  onChange: (name: string, value: string) => void
}
const TextArea = (props: TextAreaProps): JSX.Element => {
  return (
    <textarea
      style={{...props.style, fontFamily: 'inherit'}}
      rows={10}
      onChange={(evt: React.SyntheticEvent<HTMLTextAreaElement>) => {
        props.onChange(
          props.name,
          evt.currentTarget.value
        )
      }}
    />
  )
}

export default TextArea