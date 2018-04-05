import * as React from 'react'

import { Color } from '../constants/styles'
import Input from './form/Input'

const ContactForm = (): JSX.Element => {
  return (
    <>
      <form
        style={{padding: '1rem'}}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridColumnGap: '1rem',
            marginBottom: '1rem'
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

export default ContactForm