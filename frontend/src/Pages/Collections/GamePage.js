import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import GamePaginate from '../../components/GamePaginate'
import { listProductsGames } from '../../actions/productActions'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  PageContainer
} from './Collection.styles'

const GamePage = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productListGames = useSelector(state => state.productListGames)
  const { loading, error, products, page, pages } = productListGames

  useEffect(() => {
    dispatch(listProductsGames(pageNumber))
  }, [dispatch, pageNumber])
  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <CollectionPageContainer>
          <CollectionTitle>Games</CollectionTitle>
          <CollectionItemsContainer>
            {products
              .filter(product => product.category === 'GAME')
              .map(product => (
                <Product product={product} />
              ))}
          </CollectionItemsContainer>
        </CollectionPageContainer>
      )}
      <PageContainer>
        <GamePaginate pages={pages} page={page} />
      </PageContainer>
    </>
  )
}

export default GamePage
