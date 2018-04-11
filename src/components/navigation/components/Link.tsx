import * as React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Color } from '../../../styles/base'
import { Breakpoint, makeResponsiveComponent } from '../../utils/responsive'
import makeHoverableComponent from '../../utils/hoverable'

export interface LinkProps {
  title: string
  path: string
  active?: boolean
  breakpoint?: Breakpoint
}
const Link = (props: LinkProps & RouteComponentProps<{}>): JSX.Element => {
  const { title, active, breakpoint, history, path } = props
  const sidePadding = breakpoint && breakpoint >= Breakpoint.Phablet
      ? '1rem' : '0'
  return (
    <li
      style={{
        borderBottom: `1px solid ${Color.DARK_GREY}`,
        fontSize: '0.75rem',
        backgroundColor: active ? Color.DARK_GREY : undefined,
        color: active ? Color.BLUE : Color.DARK_GREY,
        transition: 'all 0.3s ease-in',
        textAlign: 'center',
        paddingTop: '1rem', paddingBottom: '1rem',
        paddingLeft: sidePadding, paddingRight: sidePadding
      }}
      onClick={() => { history.push(path) }}
    >{title}
    </li>
  )
}

export default withRouter(
  makeResponsiveComponent(
    makeHoverableComponent(Link)
  )
)