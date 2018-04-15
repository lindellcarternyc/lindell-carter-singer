import * as React from 'react'

interface PageProps {
  children?: React.ReactNode
}
const Page = (props: PageProps): JSX.Element => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Page