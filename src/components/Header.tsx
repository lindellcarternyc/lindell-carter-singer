import * as React from 'react'

import { Route } from '../constants/routes'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Breakpoint, makeResponsiveComponent } from './utils/responsive'

import MobileNavigation from './mobile-navigation'
import Title from './page/Title'
import Navigation from './navigation'

const titleForPathname = (pathname: string): string => {
  if ( pathname === '/' ) { return 'Home & News'}
  
  let title = pathname.slice(1)
  if ( title === 'media') {
    return 'Watch & Listen'
  }
  return title.charAt(0).toUpperCase() + title.slice(1)
}

interface HeaderProps extends RouteComponentProps<{}> {
  breakpoint?: Breakpoint
  routes: Route[]
}
const Header = (props: HeaderProps): JSX.Element => {
  const title = titleForPathname(props.location.pathname)

  const breakpoint = props.breakpoint || Breakpoint.Phone
  if ( breakpoint >= Breakpoint.Desktop) {
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Title text={title} />
        <Navigation routes={props.routes}/>
      </div>
    )
  }
  return (
    <>
      <MobileNavigation routes={props.routes}/>
      <Title text={title} />
    </>
  )
}

const ResponsiveHeader = makeResponsiveComponent(Header)

export default withRouter(ResponsiveHeader)