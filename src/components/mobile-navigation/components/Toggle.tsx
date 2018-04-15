import * as React from 'react'

import { Color } from '../../../styles/base'
import { Icon } from '../../Icon'

interface MobileNavigationToggleProps {
  onClick: () => void
  navigationOpen: boolean
}
const MobileNavigationToggle = (props: MobileNavigationToggleProps): JSX.Element => {
  return (
    <button
      style={{
        position: 'absolute',
        zIndex: 9,
        top: '0.25rem', left: '50%',
        transform: 'translateX(-50%)',
        border: 'none', outline: 'none',
        background: 'transparent'
      }}
      onClick={props.onClick}
    >
      <Icon 
        name="bars" 
        color={props.navigationOpen ? Color.BLUE : Color.WHITE}
      />
    </button>
  )
}

export default MobileNavigationToggle