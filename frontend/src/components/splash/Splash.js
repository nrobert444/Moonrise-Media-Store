import React from 'react'
import {
  HomeSplashContainer,
  CategoryButton,
  ButtonLink
} from './Splash.styles'

const Splash = () => {
  return (
    <HomeSplashContainer>
      <div className='header-content'>
        <h1>Moonrise Media Entertainment</h1>
        <ButtonLink to='/shop/dvd'>
          <CategoryButton inverted>DVDs</CategoryButton>
        </ButtonLink>
        <ButtonLink to='/shop/bluray'>
          <CategoryButton inverted>Blu-rays</CategoryButton>
        </ButtonLink>
        <ButtonLink to='/shop/games'>
          <CategoryButton inverted>Games</CategoryButton>
        </ButtonLink>
      </div>
    </HomeSplashContainer>
  )
}

export default Splash
