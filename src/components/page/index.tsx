import * as React from 'react'

import Title from './Title'

interface PageProps {
  title: string
  children?: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  return (
    <>
      <Title text={props.title} />
      {props.children}
    </>
  )
}

export default Page