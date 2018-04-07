import * as React from 'react'

import { Color, } from '../../constants/styles'
import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'

import Input from './Input'

interface ContactFormProps {
  breakpoint?: Breakpoint
}
const ContactForm = (props: ContactFormProps): JSX.Element => {
  const { breakpoint } = props
  let displayStyles: {
    display: 'block'
  } | {
    display: 'grid'
    gridTemplateColumns: string
    gridColumnGap: string
  }
  
  if ( breakpoint !== undefined && breakpoint > Breakpoint.Phone ) {
    displayStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridColumnGap: '1rem'
    }
  } else {
    displayStyles = { display: 'block' }
  }
  return (
    <>
      <form
        style={{padding: '1rem'}}
      >
        <div
          style={{
            marginBottom: '1rem',
            ...displayStyles
          }}
        >
          <Input label="Name" />
          <Input label="E-mail" type="email"/>
          <Input label="Message" type="textarea" />
        </div>
        <button 
          type="submit"
          style={{
            color: Color.White,
            backgroundColor: Color.Scarlet,
            border: 'none',
            outline: 'none',
            padding: '0.5rem 1.5rem'
          }}
        >SUBMIT
        </button>
      </form>
    </>
  )
}

export default makeResponsiveComponent(ContactForm)