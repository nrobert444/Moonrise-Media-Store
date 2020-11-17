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
