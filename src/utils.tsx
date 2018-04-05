import * as React from 'react'

import { NavigationItemProps } from './components/navigation/NavigationItem'

type HoverableProps = NavigationItemProps
interface HoverableState {
  isHovered: boolean
}
export function makeHoverable(Component: React.ComponentType<HoverableProps>) {
  class Hoverable extends React.Component<HoverableProps, HoverableState> {
    constructor(props: HoverableProps) {
      super(props)

      this.state = { isHovered: false }
    }

    render() {
      const { active, ...rest } = this.props
      return (
        <div
          onMouseOver={this._onMouseOver}
          onMouseOut={this._onMouseOut}
        >
          <Component 
            active={this.state.isHovered}
            {...rest}
          />
        </div>
      )
    }
  
    private _onMouseOver = () => { this.setState({ isHovered: true }) }
    private _onMouseOut = () => { this.setState({ isHovered: false }) }
  }

  return Hoverable
}