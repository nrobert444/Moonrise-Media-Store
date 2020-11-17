import styled from 'styled-components'
import CustomButton from '../CustomButton/CustomButton'

export const CollectionItemContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`

export const SeeMoreButton = styled(CustomButton)`
  width: 60%;
  opacity: 0.7;
  position: absolute;
  top: 235px;
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
  @media screen and (max-width: 1600px) {
    &:hover {
      display: none;
    }
  }
`

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media screen and (max-width: 1600px) {
    background-size: 250px auto;
    background-repeat: no-repeat;
    background-position: center;
    grid-gap: 0;
  }
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`

export const NameContainer = styled.span`
  width: 70%;
  flex-wrap: nowrap;
  margin-bottom: 15px;
`

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`
