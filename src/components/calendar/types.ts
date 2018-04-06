export interface EventData {
  dates: string[]
  title: string
  location: string
}

export interface MonthData {
  month: string
  year: string
  events: EventData[]
}