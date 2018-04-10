import * as React from 'react'

import { Color } from '../../styles/base'

import Selectors, { SelectorID } from './components/Selectors'
import Month, { MonthProps } from './components/Month'

interface CalendarProps {
  upcoming: MonthProps[]
  past: MonthProps[]
}
interface CalendarState {
  currentSelectorID: SelectorID
}
class Calendar extends React.Component<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props)

    this.state = { currentSelectorID: SelectorID.Upcoming }
  }

  render() {
    const { currentSelectorID } = this.state
    const months = currentSelectorID === SelectorID.Upcoming
      ? this.props.upcoming
      : this.props.past

    return (
      <>
        <Selectors
          activeSelectorID={currentSelectorID}
          select={this._select}
        />
        <div
          style={{
            background: Color.DARK_GREY,
            paddingLeft: '1.5rem', paddingRight: '1.5rem',
            paddingBottom: '1.5rem'
          }}
        >
          {months.map( data => {
            return <Month key={data.month} {...data} />
          })}
        </div>
      </>
    )
  }

  private _select = (id: SelectorID) => {
    this.setState({ currentSelectorID: id })
  }
}

export default Calendar