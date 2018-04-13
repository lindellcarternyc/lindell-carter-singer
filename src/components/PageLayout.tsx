import * as React from 'react'

import Page from './page'
import Navigation, { NavigationHeight } from './navigation'
 
import { Breakpoint, makeResponsiveComponent } from './utils/responsive'

interface PageLayoutProps {
  title: string
  children?: React.ReactNode
  breakpoint?: Breakpoint
}

const getPadding = (breakpoint: Breakpoint = Breakpoint.Phone): string => {
  const navHeight = NavigationHeight[breakpoint]
  return `calc(100vh - ${navHeight}px`
}

const PageLayout = (props: PageLayoutProps): JSX.Element => {
  const padding = getPadding(props.breakpoint)
      
  return (
    <div
      style={{
        paddingTop: padding,
      }}
    >
      <Navigation />
      <Page title={props.title}>
        {props.children}
      </Page>
    </div>
  )
}

export default makeResponsiveComponent(PageLayout)