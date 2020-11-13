import React from 'react'
import { HomeSplashContainer, CategoryButton } from './Splash.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Splash = () => {
  return (
    <HomeSplashContainer>
      <div className='header-content'>
        <h1>Moonrise Media Entertainment</h1>
        <CategoryButton inverted>DVDs</CategoryButton>
        <CategoryButton inverted>Blu-rays</CategoryButton>
        <CategoryButton inverted>Games</CategoryButton>
      </div>
    </HomeSplashContainer>
  )
}

export default Splash
