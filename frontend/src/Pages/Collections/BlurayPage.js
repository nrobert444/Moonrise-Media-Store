import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import BluRayPaginate from '../../components/BluRayPaginate'
import { listProductsBluray } from '../../actions/productActions'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './Collection.styles'

const BlurayPage = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productListBluray = useSelector(state => state.productListBluray)
  const { loading, error, products, page, pages } = productListBluray

  useEffect(() => {
    dispatch(listProductsBluray(pageNumber))
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
          <CollectionTitle>Blu-Rays</CollectionTitle>
          <CollectionItemsContainer>
            {products
              .filter(product => product.category === 'Blu-Ray')
              .map(product => (
                <Product product={product} />
              ))}
          </CollectionItemsContainer>
        </CollectionPageContainer>
      )}
      <BluRayPaginate pages={pages} page={page} />
    </>
  )
}

export default BlurayPage
