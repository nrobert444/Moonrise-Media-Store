import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import DvdPaginate from '../../components/DvdPaginate'
import { listProductsDvd } from '../../actions/productActions'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  PageContainer,
  CategoryImageContainerDvd
} from './Collection.styles'

const DvdPage = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productListDvd = useSelector(state => state.productListDvd)
  const { loading, error, products, page, pages } = productListDvd

  useEffect(() => {
    dispatch(listProductsDvd(pageNumber))
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
        <>
          <CategoryImageContainerDvd>
            <div className='header-content'>
              <h1>DVDs</h1>
            </div>
          </CategoryImageContainerDvd>
          <CollectionPageContainer>
            <CollectionTitle>DVD</CollectionTitle>
            <CollectionItemsContainer>
              {products
                .filter(product => product.category === 'DVD')
                .map(product => (
                  <Product key={product._id} product={product} />
                ))}
            </CollectionItemsContainer>
          </CollectionPageContainer>
        </>
      )}
      <PageContainer>
        <DvdPaginate pages={pages} page={page} />
      </PageContainer>
    </>
  )
}

export default DvdPage
