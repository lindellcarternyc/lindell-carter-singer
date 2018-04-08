import * as React from 'react'

import PageTitle from './PageTitle'
import Navigation from './navigation'

interface PageLayoutProps {
  title: string
  children?: React.ReactNode
}
const PageLayout = (props: PageLayoutProps): JSX.Element => {
  return (
    <div
      style={{
        paddingTop: '400px',
      }}
    >
      <Navigation />
      <PageTitle name={props.title} />
      {props.children}
    </div>
  )
}

export default PageLayout