import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Product from '../components/Product/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DvdPaginate from '../components/DvdPaginate'
import { listProductsDvd } from '../actions/productActions'

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
          <h1>DVDs</h1>
          <Row>
            {products
              .filter(product => product.category === 'DVD')
              .map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
      <DvdPaginate pages={pages} page={page} />
    </>
  )
}

export default DvdPage
