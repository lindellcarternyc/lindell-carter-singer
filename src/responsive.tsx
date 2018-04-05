import * as React from 'react'

import { Breakpoint, breakpointForWidth } from './constants/styles'

export function makeResponsiveComponent<ComponentProps extends { breakpoint?: Breakpoint } >(
  Component: React.ComponentType<ComponentProps>
) {
  interface ResponsiveComponentState {
    breakpoint: Breakpoint
  }
  class ResponsiveComponent extends React.Component<ComponentProps, ResponsiveComponentState> {
    constructor(props: ComponentProps) {
      super(props)

      this.state = { breakpoint: Breakpoint.Mobile }
    }

    componentDidMount() {
      this._resize()
      window.addEventListener('resize', this._resize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._resize)
    }
    render() {
      return (
        <Component
          breakpoint={this.state.breakpoint}
          {...this.props}
        />
      )
    }

    private _resize = () => {
      const width = window.innerWidth
      const breakpoint = breakpointForWidth(width)
      this.setState({ breakpoint })
    }
  }

  return ResponsiveComponent
}