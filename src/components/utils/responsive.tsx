import * as React from 'react'

export enum Breakpoint {
  Phone,
  Phablet,
  Tablet,
  Desktop,
  Widescreen
}
export const breakpointForWidth = (width: number): Breakpoint => {
  if ( width >= 1100 ) {
    return Breakpoint.Widescreen
  } else if ( width >= 970 ) { 
    return Breakpoint.Desktop
  } else if ( width >= 725 ) {
    return Breakpoint.Tablet
  } else if ( width >= 475 ) {
    return Breakpoint.Phablet
  }
  return Breakpoint.Phone
}

export function makeResponsiveComponent<ComponentProps extends { breakpoint?: Breakpoint } >(
  Component: React.ComponentType<ComponentProps>
) {
  interface ResponsiveComponentState {
    breakpoint: Breakpoint
  }
  class ResponsiveComponent extends React.Component<ComponentProps, ResponsiveComponentState> {
    constructor(props: ComponentProps) {
      super(props)

      this.state = { breakpoint: Breakpoint.Phone }
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