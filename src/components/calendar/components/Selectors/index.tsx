import * as React from 'react'

import Selector, { SelectorID } from './Selector'

interface SelectorsProps {
  activeSelectorID: SelectorID
  select: (name: string) => void
}
const Selectors = (props: SelectorsProps): JSX.Element => {
  const { activeSelectorID, select } = props
  return (
    <ul
      style={{
        paddingLeft: '0.75rem', paddingRight: '0.75rem',
        display: 'flex', justifyContent: 'flex-end',
        background: 'white'
      }}
    >
      <Selector 
        id={SelectorID.Upcoming}
        active={activeSelectorID === SelectorID.Upcoming}
        onClick={() => { select(SelectorID.Upcoming)}}
      />
      <Selector 
        id={SelectorID.Past}
        active={activeSelectorID === SelectorID.Past}
        onClick={() => { select(SelectorID.Past) }}
      />
    </ul>
  )
}

export { SelectorID }
export default Selectors