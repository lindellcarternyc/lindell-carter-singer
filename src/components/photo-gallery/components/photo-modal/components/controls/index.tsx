import * as React from 'react'

import { Color } from '../../../../../../styles/base'
import Control, { ControlAction } from './Control'

interface ControlsProps {
  currentIndex: number
  dataCount: number
  handleAction: (action: ControlAction) => void
}
const Controls = (props: ControlsProps): JSX.Element => {
  const { currentIndex, dataCount, handleAction } = props
  
  return (
    <div 
      style={{
        display: 'flex', justifyContent: 'space-around',
        color: Color.DARK_GREY
      }}
    >
      <Control action={ControlAction.Previous} handleAction={handleAction} />
      <p>{currentIndex + 1} of {dataCount}</p>
      <Control action={ControlAction.Next} handleAction={handleAction} />
    </div>
  )
}

export { ControlAction }
export default Controls