import * as React from 'react'

import { Color } from '../../../../../../styles/base'
import makeHoverableComponent from '../../../../../utils/hoverable'
import { Breakpoint, makeResponsiveComponent } from '../../../../../utils/responsive'

import { Dates, Title, Location, Link } from './components'

export interface EventProps {
  dates: string[]
  title: string
  location: string
  active?: boolean
  breakpoint?: Breakpoint
}

const Event = (props: EventProps): JSX.Element => {
  const { dates, title, location, breakpoint, active } = props
  return (
    <div
      style={{
        paddingTop: '1.5rem', paddingBottom: '1rem',
        paddingLeft: '0.5rem', paddingRight: '0.5rem',
        background: active ? 'black' : undefined,
        transition: 'background 0.3s ease-in',
        borderBottom: `1px solid ${Color.LIGHT_GREY}`,
        display: 'grid',
        gridColumnGap: '1rem',
        gridTemplateColumns: breakpoint && breakpoint > Breakpoint.Phone 
          ? '70px repeat(2, 1fr) 80px'
          : undefined
      }}
    >
      <Dates dates={dates} />
      <Title text={title} />
      <Location location={location} />
      <Link />
    </div>
  )
}

export default makeResponsiveComponent(makeHoverableComponent(Event))