import * as React from 'react'

import Hero from './Hero'
// import Navigation from './navigation'

interface HeaderProps {
  heroImage: string
}
const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div 
      style={{
        position: 'relative',
        zIndex: -1
      }}
    >
      <Hero image={props.heroImage} />
      {/* <Navigation /> */}
    </div>
  )
}

export default Header