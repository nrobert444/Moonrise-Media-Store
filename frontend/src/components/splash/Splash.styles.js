import styled from 'styled-components'
import CustomButton from '../CustomButton/CustomButton'
import { Link } from 'react-router-dom'

export const HomeSplashContainer = styled.div`
  background: url('../images/moonrisesplash.jpeg') no-repeat center right/cover;
  height: 100vh;
  color: #fff;
  border: 3px solid #292b2c;
  margin-bottom: 50px;

  & .header-content {
    text-align: center;
    padding-top: 20%;
    & h1 {
      font-size: 5rem;
      color: #fff;
      line-height: 1.2;
    }
  }

  @media (max-width: 800px) {
    height: 30rem;
    & .header-content {
      padding-top: 5rem;
    }
  }

  @media (max-width: 500px) {
    height: 10rem;
    border-bottom: 3px solid #ffbc00;
    background-position: 20% 30%;

    & .header-content {
      display: none;
    }
  }

  @media (max-height: 580px) {
    & .header-content {
      padding-top: 3rem;
    }
  }

  @media (max-height: 330px) {
    & .header-content {
      & h1 {
        font-size: 2rem;
      }
    }
  }
`
export const CategoryButton = styled(CustomButton)`
  width: 10%;
  background-color: #292b2c;
  border: 2px solid #5cb85c;
  color: #5cb85c;
  font-size: 18px;
  display: inline-block;
  position: relative;
  margin: 5px;

  &:hover {
    color: white;
    background-color: #5cb85c;
  }
  @media screen and (max-width: 600px) {
    opacity: 0.9;
    display: none;
    min-width: unset;
    padding: 0 10px;
  }
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
