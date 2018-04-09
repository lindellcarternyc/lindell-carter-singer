import * as React from 'react'

import { Color } from '../../constants/styles'
import makeHoverableComponent from '../utils/hoverable'
import { PageRoute } from '../../pages/index'
import { withRouter, RouteComponentProps } from 'react-router-dom'

export interface NavigationItemProps {
  route: PageRoute
  active?: boolean
  padded?: boolean
}
const NavigationItem = (props: NavigationItemProps & RouteComponentProps<{}>): JSX.Element => {
  let { route, active, padded, history, match } = props
  
  if ( match.path === route.path ) {
    active = true
  }
  
  const padding = padded === true
  ? {
    padding: '1rem 1rem'
  } : {
    padding: '1rem 0'
  }

  return (
    <li
      style={{
        borderBottom: `1px solid ${Color.DarkGrey}`,
        fontSize: '0.75rem',
        backgroundColor: active ? Color.DarkGrey : undefined,
        color: active ? Color.Blue : Color.DarkGrey,
        transition: 'all 0.3s ease-in',
        textAlign: 'center',
        ...padding
      }}
      onClick={() => { history.push(route.path) }}
    >
      {route.name}
    </li>
  )
}

export default withRouter(
  makeHoverableComponent(NavigationItem)
)