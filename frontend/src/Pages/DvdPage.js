import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import DvdPaginate from '../components/DvdPaginate'
import { listProducts } from '../actions/productActions'

const DvdPage = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
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
