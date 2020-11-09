import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import { listProducts } from '../../actions/productActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Meta from '../../components/Meta'
import {
  CollectionPreviewContainer,
  TitleContainer,
  GoBackLink,
  PreviewContainer
} from './HomePage.styles'

const HomePage = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {!keyword ? (
        <CollectionPreviewContainer>
          <GoBackLink to='/shop/dvd'>
            <TitleContainer>DVDs</TitleContainer>
          </GoBackLink>
          <PreviewContainer>
            {products
              .filter(product => product.category === 'DVD')
              .map((product, idx) =>
                idx < 4 ? <Product product={product} /> : ''
              )}
          </PreviewContainer>
          <GoBackLink to='/shop/bluray'>
            <TitleContainer>Blu-Rays</TitleContainer>
          </GoBackLink>
          <PreviewContainer>
            {products
              .filter(product => product.category === 'Blu-Ray')
              .map((product, idx) =>
                idx < 4 ? <Product product={product} /> : ''
              )}
          </PreviewContainer>
          <GoBackLink to='/shop/games'>
            <TitleContainer>Games</TitleContainer>
          </GoBackLink>
          <PreviewContainer>
            {products
              .filter(product => product.category === 'GAME')
              .map((product, idx) =>
                idx < 4 ? <Product product={product} /> : ''
              )}
          </PreviewContainer>
        </CollectionPreviewContainer>
      ) : (
        <>
          <GoBackLink to='/' className='btn btn-light'>
            Go Back
          </GoBackLink>
          <CollectionPreviewContainer>
            <PreviewContainer>
              {products
                .filter(product => product.category === 'DVD')
                .map((product, idx) =>
                  idx < 4 ? <Product product={product} /> : ''
                )}
            </PreviewContainer>
            <PreviewContainer>
              {products
                .filter(product => product.category === 'Blu-Ray')
                .map((product, idx) =>
                  idx < 4 ? <Product product={product} /> : ''
                )}
            </PreviewContainer>
            <PreviewContainer>
              {products
                .filter(product => product.category === 'GAME')
                .map((product, idx) =>
                  idx < 4 ? <Product product={product} /> : ''
                )}
            </PreviewContainer>
          </CollectionPreviewContainer>
        </>
      )}
    </>
  )
}

export default HomePage
