import * as React from 'react'

import { Color } from '../../../../styles/base'
import makeHoverableComponent from '../../../utils/hoverable'

export enum SelectorID {
  Upcoming = 'Upcoming',
  Past = 'Past'
}

interface SelectorProps {
  id: SelectorID
  active?: boolean
  onClick: () => void
}
const Selector = (props: SelectorProps): JSX.Element => {
  const { id, active, onClick } = props

  return (
    <li
      style={{
        fontSize: '0.75rem',
        display: 'inline-block',
        padding: '1rem',
        color: active ? Color.BLUE : Color.DARK_GREY,
        background: active ? Color.DARK_GREY : undefined,
        transition: 'all 0.3s ease-in'
      }}
      onClick={onClick}
    >
      {id + ' Events'}
    </li>
  )

}

export default makeHoverableComponent(Selector)