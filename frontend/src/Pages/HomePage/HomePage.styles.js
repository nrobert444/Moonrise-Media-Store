import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.h1`
  font-size: 28px;
  border-bottom: 2px solid black;
  margin: 15px 0 30px 0;
  cursor: pointer;
`

export const CollectionItemsContainer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 15px;
  }
`

export const GoBackLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
