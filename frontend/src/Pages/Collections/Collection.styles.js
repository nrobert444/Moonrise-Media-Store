import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CollectionTitle = styled.h2`
  font-size: 38px;
  border-bottom: 2px solid black;
  margin: 40px 0 30px 0;
`

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
export const PageContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`
export const CategoryImageContainerDvd = styled.div`
  background: url('../images/dvdimage.jpg') no-repeat center right/cover;
  height: 60vh;
  color: #fff;
  border: 3px solid #292b2c;
  margin-bottom: 30px;

  & .header-content {
    text-align: center;
    & h1 {
      padding-top: 5%;
      font-size: 10rem;
      color: #fff;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 800px) {
    height: 50vh;
    & .header-content {
      & h1 {
        padding-top: 15%;
        font-size: 8rem;
      }
    }
  }
`

export const CategoryImageContainerBluRay = styled.div`
  background: url('../images/movieIconCollage.jpg') no-repeat center right/cover;
  height: 60vh;
  color: #fff;
  border: 3px solid #292b2c;
  margin-bottom: 30px;

  & .header-content {
    text-align: center;
    & h1 {
      padding-top: 5%;
      font-size: 10rem;
      color: #fff;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 800px) {
    height: 50vh;
    & .header-content {
      & h1 {
        padding-top: 15%;
        font-size: 8rem;
      }
    }
  }
`
export const CategoryImageContainerGame = styled.div`
  background: url('../images/videoGame.jpg') center right/cover;
  height: 60vh;
  color: #fff;
  border: 3px solid #292b2c;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    height: 40vh;
    background-position: 52% 30%;
  }
`
