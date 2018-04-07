import * as React from 'react'

import { Color, } from '../../../constants/styles'
import { makeHoverableComponent }  from '../../Hoverable'
import { Breakpoint, makeResponsiveComponent } from '../../utils/responsive'

import CalendarItemDates from './CalendarItemDates'
import CalendarItemTitle from './CalendarItemTitle'
import CalendarItemVenue from './CalendarItemVenue'
import CalendarItemLink from './CalendarItemLink'

import { EventData } from '../types'

interface CalendarItemProps extends EventData {
  active?: boolean
  breakpoint?: Breakpoint
}
const CalendarItem = (props: CalendarItemProps): JSX.Element => {
  const { dates, title, location, breakpoint } = props
  return (
    <div
      style={{
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        paddingTop: '1.5rem',
        paddingBottom: '1rem',
        background: props.active ? 'black' : undefined,
        transition: 'background 0.3s ease-in',
        borderBottom: `1px solid ${Color.LightGrey}`,
        display: 'grid',
        gridTemplateColumns: breakpoint === Breakpoint.Desktop 
          ? '70px repeat(2, 1fr) 80px'
          : undefined,
        gridColumnGap: '1rem'
      }}
    >
      <CalendarItemDates dates={dates} />
      <CalendarItemTitle text={title} active={props.active}/>
      <CalendarItemVenue location={location} />
      <CalendarItemLink />
    </div>
  )
}

export default 
makeResponsiveComponent(
  makeHoverableComponent(CalendarItem)
)