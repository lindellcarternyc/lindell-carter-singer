import * as React from 'react'

export enum Breakpoint {
  Phone,
  Phablet,
  Tablet,
  Desktop,
  Widescreen
}
export const breakpointForWidth = (width: number): Breakpoint => {
  if ( width >= 600 ) {
    return Breakpoint.Desktop
  } else {
    return Breakpoint.Phone
  }
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