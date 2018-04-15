import * as React from 'react'

import MobileNavigationToggle from './components/Toggle'
import MobileNavigationLink from './components/Link'

import { Route } from '../../constants/routes'

interface MobileNavigationProps {
  routes: Route[]
}
interface MobileNavigationState {
  open: boolean
}
class MobileNavigation extends React.Component<MobileNavigationProps, MobileNavigationState> {
  constructor(props: MobileNavigationProps) {
    super(props)

    this.state = { open: false }
  }

  toggleOpen = () => {
    this.setState(({ open }) => {
      return { open: !open }
    })
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          background: 'rgba(0, 0, 0, 0.4)',
          width: '100%', minHeight: '1.5rem',
        }}
      >
        <MobileNavigationToggle onClick={this.toggleOpen} navigationOpen={this.state.open} />
        <ul
          style={{
            overflow: 'hidden',
            background: 'white',
            paddingTop: '1.5rem',
            paddingBottom: '1rem',
            position: 'absolute',
            left: '50%',
            width: '100%',
            transform: 'translateX(-50%)',
            top: this.state.open ? 0 : '-22rem',
            transition: 'top 0.3s ease'
          }}
          onClick={this.toggleOpen}
        >
          {this.props.routes.map(route => {
            return <MobileNavigationLink key={JSON.stringify(route)} route={route} />
          })}
        </ul>
      </div>
    )
  }
}

export default MobileNavigation