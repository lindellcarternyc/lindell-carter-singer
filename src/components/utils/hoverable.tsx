import * as React from 'react'

function makeHoverableComponent<ComponentProps extends { active?: boolean }>(
  Component: React.ComponentType<ComponentProps>
) {
  interface HoverableComponentState {
    isHovered: boolean
  }
  class HoverableComponent extends React.Component<ComponentProps, HoverableComponentState> {
    constructor(props: ComponentProps) {
      super(props)

      this.state = { isHovered: false }
    }

    render() {
      const active = this.props.active === true || this.state.isHovered
      let props: ComponentProps = this.props
      return (
        <div 
          onMouseOver={this._onMouseOver}
          onMouseOut={this._onMouseOut}
        >
          <Component 
            {...props}
            active={active}
          />
        </div>
      )
    }

    private _onMouseOver = () => { this.setState({ isHovered: true }) }
    private _onMouseOut = () => { this.setState({ isHovered: false }) }
  }

  return HoverableComponent
}

export default makeHoverableComponent