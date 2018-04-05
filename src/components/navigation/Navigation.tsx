import * as React from 'react'

import { Breakpoint } from '../../constants/styles'
import { makeResponsiveComponent } from '../../responsive'

const LINKS = [
  'NEWS', 'ABOUT', 'CALENDAR',
  'GALLERY', 'WATCH & LISTEN', 'CONTACT'
]

import HoverNavigationItem from './HoverNavigationItem'
export interface NavigationProps {
  breakpoint?: Breakpoint
}
const NavigationComponent = (props: NavigationProps): JSX.Element => {
  const breakpoint = props.breakpoint || Breakpoint.Mobile
  const display = breakpoint === Breakpoint.Mobile
    ? { 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)'
    } : {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          padding: '1.5rem 1rem',
          ...display,
        }}
      >
        {LINKS.map(link => {
          return (
            <HoverNavigationItem key={link} text={link} padded={breakpoint === Breakpoint.Desktop}/>)
        })}
      </ul>
    </nav>
  )
}

export default makeResponsiveComponent(NavigationComponent)