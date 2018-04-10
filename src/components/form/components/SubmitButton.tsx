import * as React from 'react'

import { Color } from '../../../constants/styles'

interface SubmitButtonProps {
  disabled: boolean
  onClick: (evt: React.SyntheticEvent<HTMLButtonElement>) => void
}
const SubmitButton = (props: SubmitButtonProps): JSX.Element => {
  return (
    <button
      type="submit"
      style={{
        color: Color.White,
        backgroundColor: Color.Scarlet,
        border: 'none',
        outline: 'none',
        padding: '0.5rem 1.5rem'
      }}
      disabled={props.disabled}
      onClick={props.onClick}
    >SUBMIT
    </button>
  )
}

export default SubmitButton