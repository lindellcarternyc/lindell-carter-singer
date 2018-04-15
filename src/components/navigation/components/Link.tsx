import * as React from 'react'

import { Route } from '../../../constants/routes'

import BaseLink from '../../BaseLink'

interface LinkProps {
  route: Route
}

const Styles = {
  color: 'white',
  paddingTop: '1.5rem',
  margin: '1rem 0.5rem',
  borderTop: '1px solid transparent'
}

const ActiveStyles = {
  borderTop: '1px solid white'
}

const Link = (props: LinkProps): JSX.Element => {
  const { route } = props

  return (
    <BaseLink route={route} style={Styles} activeStyle={ActiveStyles} />
  )
}

export default Link