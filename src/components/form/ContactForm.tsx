import * as React from 'react'

import { Color, } from '../../constants/styles'
import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'

import Input from './components/Input'
import SubmitButton from './components/SubmitButton'

interface ContactFormProps {
  breakpoint?: Breakpoint
}
interface ContactFormState {
  name: string
  email: string
  message: string
}

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  onChange = (name: string, value: string) => {
    switch (name) {
      case 'name':
        this.setState({ name: value })
        break
      case 'email':
        this.setState({ email: value })
        break
      case 'message':
        this.setState({ message: value })
        break
      default: return
    }
  }

  onSubmit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()
    const data = { ...this.state }
    console.dir(data)
  }

  render() {
    return (
      <>
        <form
          style={{ padding: '1rem', background: Color.White }}
          onSubmit={this.onSubmit}
        >
          <div
            style={{
              marginBottom: '1rem',
              ...this._displayStyles
            }}
          >
            <Input
              label="Name"
              onChange={this.onChange}
              name="name"
              value={this.state.name}
            />
            <Input
              label="E-mail"
              type="email"
              onChange={this.onChange}
              name="email"
              value={this.state.email}
            />
            <Input
              label="Message"
              type="textarea"
              onChange={this.onChange}
              name="message"
              value={this.state.message}
            />
          </div>
          <SubmitButton disabled={!this._isValid} onClick={this.onSubmit} />
        </form>
      </>
    )
  }

  private get _displayStyles() {
    const { breakpoint } = this.props
    if (breakpoint !== undefined && breakpoint > Breakpoint.Phone) {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: '1rem'
      }
    } else {
      return { display: 'block' }
    }
  }

  private get _isValid(): boolean {
    const { name, email, message } = this.state
    return name !== '' && email !== '' && message !== ''
  }
}

export default makeResponsiveComponent(ContactForm)