import * as React from 'react'

import Hero from './Hero'
import Navigation from './navigation'

interface HeaderProps {
  heroImage: string
}
const Header = (props: HeaderProps): JSX.Element => {
  return (
    <>
      <Hero image={props.heroImage} />
      <Navigation />
    </>
  )
}

export default Header