import * as React from 'react'

import PageTitle from './PageTitle'

interface PageLayoutProps {
  title: string
  children?: React.ReactNode
}
const PageLayout = (props: PageLayoutProps): JSX.Element => {
  return (
    <>
      <PageTitle name={props.title} />
      {props.children}
    </>
  )
}

export default PageLayout