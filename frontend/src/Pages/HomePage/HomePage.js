import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../components/Product/Product'
import { listProducts } from '../../actions/productActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Meta from '../../components/Meta'
import Splash from '../../components/splash/Splash'
import {
  CollectionPreviewContainer,
  CollectionItemsContainer,
  TitleContainer,
  GoBackLink
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
        <>
          <Splash />
          <CollectionPreviewContainer>
            <TitleContainer>
              <GoBackLink to='/shop/dvd'>DVDs</GoBackLink>
            </TitleContainer>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'DVD')
                .map((product, idx) =>
                  idx < 4 ? <Product key={product._id} product={product} /> : ''
                )}
            </CollectionItemsContainer>
            <TitleContainer>
              <GoBackLink to='/shop/bluray'>Blu-Rays</GoBackLink>
            </TitleContainer>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'Blu-Ray')
                .map((product, idx) =>
                  idx < 4 ? <Product key={product._id} product={product} /> : ''
                )}
            </CollectionItemsContainer>
            <TitleContainer>
              <GoBackLink to='/shop/games'>Games</GoBackLink>
            </TitleContainer>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'GAME')
                .map((product, idx) =>
                  idx < 4 ? <Product key={product._id} product={product} /> : ''
                )}
            </CollectionItemsContainer>
          </CollectionPreviewContainer>
        </>
      ) : (
        <>
          <GoBackLink to='/' className='btn btn-light'>
            Go Back
          </GoBackLink>
          <CollectionPreviewContainer>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'DVD')
                .map((product, idx) =>
                  idx < 4 ? <Product key={product._id} product={product} /> : ''
                )}
            </CollectionItemsContainer>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'Blu-Ray')
                .map((product, idx) =>
                  idx < 4 ? <Product key={product._id} product={product} /> : ''
                )}
            </CollectionItemsContainer>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'GAME')
                .map((product, idx) =>
                  idx < 4 ? <Product key={product._id} product={product} /> : ''
                )}
            </CollectionItemsContainer>
          </CollectionPreviewContainer>
        </>
      )}
    </>
  )
}

export default HomePage
