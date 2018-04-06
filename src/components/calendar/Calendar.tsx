import * as React from 'react'

import { Color } from '../../constants/styles'

import CalendarSelectors from './CalendarSelectors'
import CalendarMonth from './CalendarMonth'

import { MonthData } from './types'

interface CalendarProps {
  upcomingEvents: MonthData[]
  pastEvents: MonthData[]
}
interface CalendarState {
  currentList: 'Upcoming' | 'Past'
}
class Calendar extends React.Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props)

    this.state = { currentList: 'Upcoming' }
  }
  render() {
    const currentData = this.state.currentList === 'Upcoming' 
      ? this.props.upcomingEvents : this.props.pastEvents
    return (
      <>
        <CalendarSelectors 
          activeItem={this.state.currentList}
          select={this._selectList}
        />
        
        <div
          style={{
            background: Color.DarkGrey,
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem'
          }}
        >
          {currentData.map( data => {
            return (
              <CalendarMonth  key={data.month + '_' + data.year} {...data} />
            )
          })}
        </div>
      </>
    )
  }

  private _selectList = (name: 'Upcoming' | 'Past') => {
    this.setState({ currentList: name })
  }
}

export default Calendar