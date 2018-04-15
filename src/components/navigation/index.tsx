import * as React from 'react'

import Link from './components/Link'
import { Route } from '../../constants/routes'

interface NavigationProps {
  routes: Route[]
}
const Navigation = (props: NavigationProps): JSX.Element => {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {props.routes.map(route => {
          return <Link key={JSON.stringify(route)} route={route} />
        })}
      </ul>
    </nav>
  )
}

export default Navigation