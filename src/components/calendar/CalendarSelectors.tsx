import * as React from 'react'

import { Color } from '../../constants/styles'

import CalendarSelector from './CalendarSelector'

interface CalendarSelectorsProps {
  activeItem: 'Upcoming' | 'Past'
  select: (name: 'Upcoming' | 'Past') => void
}

const CalendarSelectors = (props: CalendarSelectorsProps): JSX.Element => {
  const { activeItem } = props
  return (
    <ul
      style={{
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        display: 'flex',
        justifyContent: 'flex-end',
        background: Color.White
      }}
    >
      <CalendarSelector 
        text="Upcoming Events" 
        active={activeItem === 'Upcoming'}
        onClick={() => { props.select('Upcoming') }}
      />
      <CalendarSelector 
        text="Past Events" 
        active={activeItem === 'Past'}
        onClick={() => { props.select('Past') }}
      />
    </ul>
  )
}

export default CalendarSelectors