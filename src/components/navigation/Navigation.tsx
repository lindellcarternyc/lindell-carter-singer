import * as React from 'react'

import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'
import { PAGE_ROUTES, } from '../../pages'

import NavigationItem from './NavigationItem'
interface NavigationProps {
  breakpoint?: Breakpoint
}

export const NavigationHeight = {
  [Breakpoint.Phone]: 92,
  [Breakpoint.Phablet]: 196
}

const styles = (breakpoint: Breakpoint) => {
  let displayStyles: { 
    display: 'grid',
    gridTemplateColumns: string
  } | {
    display: 'flex',
    justifyContent: string
  }

  if ( breakpoint > Breakpoint.Phone ) {
    displayStyles = {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  } else {
    displayStyles = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }
  return {
    listStyle: 'none',
    padding: '1.5rem 1rem',
    background: 'white',
    ...displayStyles,
  }
}

const NavigationComponent = (props: NavigationProps): JSX.Element => {
  const breakpoint = props.breakpoint || Breakpoint.Phone
  const padded = breakpoint >= Breakpoint.Phablet
  return (
    <nav>
      <ul
        style={styles(breakpoint)}
      >
        <NavigationItem 
          route={PAGE_ROUTES.HOME} 
          padded={padded} 
        />
        <NavigationItem route={PAGE_ROUTES.ABOUT} padded={padded} />
        <NavigationItem route={PAGE_ROUTES.CALENDAR} padded={padded} />
        <NavigationItem route={PAGE_ROUTES.GALLERY} padded={padded} />
        <NavigationItem route={PAGE_ROUTES.WATCH_AND_LISTEN} padded={padded} />
        <NavigationItem route={PAGE_ROUTES.CONTACT} padded={padded} />
      </ul>
    </nav>
  )
}

export default makeResponsiveComponent(NavigationComponent)