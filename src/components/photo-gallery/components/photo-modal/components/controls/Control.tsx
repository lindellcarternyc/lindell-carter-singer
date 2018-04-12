import * as React from 'react'

import { Icon } from '../../../../../Icon'
import { Color } from '../../../../../../styles/base'
import makeHoverableComponent from '../../../../../utils/hoverable'

export enum ControlAction {
  Previous, Next
}

interface ControlProps {
  action: ControlAction
  handleAction: (action: ControlAction) => void
  active?: boolean
}
const Control = (props: ControlProps) => {
  const { action, active, handleAction } = props
  const iconName = 'chevron-' + (
    action === ControlAction.Previous
      ? 'left' : 'right'
  )

  return (
    <button
      style={{
        border: 'none', outline: 'none',
        cursor: 'pointer',
        color: active ? Color.BLUE : Color.DARK_GREY
      }}
      onClick={() => { handleAction(props.action) }}
    >
      <Icon name={iconName} fontSize="1.25rem" />
    </button>
  )
}

export default makeHoverableComponent(Control)