import * as React from 'react'

import { Breakpoint, makeResponsiveComponent } from '../utils/responsive'

import Link from './components/Link'
import { PAGE_ROUTES } from '../../pages'

interface NavigationProps {
  breakpoint?: Breakpoint
}
const Navigation = (props: NavigationProps): JSX.Element => {
  const { breakpoint } = props
  const displayStyles = breakpoint && breakpoint >= Breakpoint.Phablet 
    ? {
      display: 'flex',
      justifyContent: 'flex-end'
    } :
    {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          padding: '1.5rem 1rem',
          background: 'white',
          ...displayStyles
        }}
      >
        <Link title={PAGE_ROUTES.HOME.name} path={PAGE_ROUTES.HOME.path} />
        <Link title={PAGE_ROUTES.ABOUT.name} path={PAGE_ROUTES.ABOUT.path} />
        <Link title={PAGE_ROUTES.CALENDAR.name} path={PAGE_ROUTES.CALENDAR.path} />
        <Link title={PAGE_ROUTES.GALLERY.name} path={PAGE_ROUTES.GALLERY.path} />
        <Link title={PAGE_ROUTES.WATCH_AND_LISTEN.name} path={PAGE_ROUTES.WATCH_AND_LISTEN.path} />
        <Link title={PAGE_ROUTES.CONTACT.name} path={PAGE_ROUTES.CONTACT.path} />
      </ul>
    </nav>
  )
}

export default makeResponsiveComponent(Navigation)
export const NavigationHeight = {
  [Breakpoint.Phone]: 196,
  [Breakpoint.Phablet]: 92
}