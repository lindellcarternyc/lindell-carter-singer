const Blue = '#0582ca'
const DarkGrey = '#2e3438'
const Scarlet = '#550527'
const White = 'white'
const LightGrey = '#6c7b84'

export const Color = {
  Blue,
  DarkGrey,
  Scarlet,
  White,
  LightGrey
}

export enum Breakpoint {
  Mobile = 'mobile',
  Desktop = 'desktop'
}
export const breakpointForWidth = (width: number): Breakpoint => {
  if ( width >= 600 ) {
    return Breakpoint.Desktop
  } else {
    return Breakpoint.Mobile
  }
}
export const Responsive = {
  Breakpoint,
  breakpointForWidth
}

export const Style = {
  Color,
  Responsive
}