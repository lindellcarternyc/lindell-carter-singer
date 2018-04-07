import * as React from 'react'

import { Color } from '../constants/styles'

import { HoverableIcon } from './Icon'

const FooterIcon = (props: { brandName: string }): JSX.Element => {
  return (
    <HoverableIcon 
      brand 
      name={props.brandName} 
      color={Color.White}
      hoverColor={Color.Blue}
      fontSize="2rem"
    />
  )
}

const FooterIcons = (): JSX.Element => {
  return (
    <div 
      style={{
        width: '12rem',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2rem'
      }}
    >
      <FooterIcon brandName="facebook-f" />
      <FooterIcon brandName="youtube" />
      <FooterIcon brandName="twitter" />
      <FooterIcon brandName="instagram" />
    </div>
  )
}

const Footer = (): JSX.Element => {
  return (
    <div
      style={{
        background: Color.LightGrey,
        paddingLeft: '1rem', paddingRight: '1rem',
        paddingTop: '4rem', paddingBottom: '3rem'
      }}
    >
      <FooterIcons />
      <hr style={{border: `1px solid ${Color.White}`}} />
      <p
        style={{
          color: Color.White,
          fontSize: '0.8rem',
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
      >&copy; 2018 Lindell Carter | Designed and Developed by Lindell Carter
      </p>
    </div>
  )
}

export default Footer