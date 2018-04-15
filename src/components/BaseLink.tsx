import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import makeHoverableComponent from './utils/hoverable'

import { Route } from '../constants/routes'

interface BaseLinkProps extends RouteComponentProps<{}> {
  route: Route,
  style: { [key: string]: string }
  activeStyle: { [key: string]: string }
  active?: boolean
}

const BaseLink = (props: BaseLinkProps): JSX.Element => {
  let { history, location, route, style, activeStyle } = props
  const current = route.path === location.pathname
  const active = props.active || current

  if ( current || active ) {
    style = { ...style, ...activeStyle }
  }

  return (
    <li
      onClick={() => { history.push(route.path) }} 
      style={{
        listStyle: 'none',
        cursor: 'pointer',
        ...style
      }}
    >
      <a
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        {route.name}
      </a>
    </li>
  )
}

export default withRouter(
  makeHoverableComponent(BaseLink)
)