import * as React from 'react'

import { NavigationProps } from './components/navigation/Navigation'
import { Breakpoint, breakpointForWidth } from './constants/styles'

export const makeResponsive = (Component: React.ComponentType<NavigationProps>)  => {
  interface ResponsiveNavigationState {
    breakpoint: Breakpoint
  }
  class ResponsiveNavigation extends React.Component<NavigationProps, ResponsiveNavigationState> {
    constructor(props: NavigationProps) {
      super(props)

      this.state = { breakpoint: Breakpoint.Mobile }
    }

    componentDidMount() {
      window.addEventListener('resize', this._resize)
      this._resize()
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this._resize)
    }
    
    render() {
      const { breakpoint, ...rest } = this.props
      return (
        <Component {...rest} breakpoint={this.state.breakpoint} />
      )
    }

    private _resize = () => {
      const width = window.innerWidth
      const breakpoint = breakpointForWidth(width)
      this.setState({ breakpoint }) 
    }
  }

  return ResponsiveNavigation
}