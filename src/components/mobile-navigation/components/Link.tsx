import * as React from 'react'

import { Color } from '../../../styles/base'
import { Route } from '../../../constants/routes'

import BaseLink from '../../BaseLink'

interface MobileNavigationLinkProps  {
  route: Route
}

const Styles = {
  color: Color.DARK_GREY,
  textAlign: 'center',
  fontSize: '0.75rem',
  padding: '1rem',
  borderBottom: `1px solid ${Color.DARK_GREY}`,
  transition: 'all 0.3s ease-in'
}
const ActiveStyles = {
  color: Color.BLUE,
  background: Color.DARK_GREY
}
const MobileNavigationLink = (props: MobileNavigationLinkProps): JSX.Element => {
  const { route } = props
  return (
    <BaseLink route={route} style={Styles} activeStyle={ActiveStyles} />
  )
}

export default MobileNavigationLink