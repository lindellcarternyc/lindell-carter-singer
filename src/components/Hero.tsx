import * as React from 'react'

interface HeroProps {
  image: string
}

const Hero = (props: HeroProps): JSX.Element => {
  return (
    <div 
      style={{
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        width: '100%',
        maxWidth: '800px',
        height: '100vh',
        maxHeight: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin: '0 auto'
      }}
    />
  )
}

export default Hero