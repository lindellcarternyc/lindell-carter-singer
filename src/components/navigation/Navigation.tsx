import * as React from 'react'

import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'

const LINKS = [
  'NEWS', 'ABOUT', 'CALENDAR',
  'GALLERY', 'WATCH & LISTEN', 'CONTACT'
]

import HoverNavigationItem from './HoverNavigationItem'
export interface NavigationProps {
  breakpoint?: Breakpoint
}
const NavigationComponent = (props: NavigationProps): JSX.Element => {
  const breakpoint = props.breakpoint || Breakpoint.Phone
  const padded = breakpoint >= Breakpoint.Phablet

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
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          padding: '1.5rem 1rem',
          ...displayStyles,
        }}
      >
        {LINKS.map(link => {
          return (
            <HoverNavigationItem key={link} text={link} padded={padded}/>)
        })}
      </ul>
    </nav>
  )
}

export default makeResponsiveComponent(NavigationComponent)