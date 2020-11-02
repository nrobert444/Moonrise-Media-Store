import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'

const HomePage = ({ match }) => {
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
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Link to='/shop/dvd'>
            <h4>DVDs - See All</h4>
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'dvd')
              .map((product, idx) =>
                idx < 3 ? (
                  <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
          <Link to='/shop/bluray'>
            <h4>Blu-Rays - See All</h4>
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'bluray')
              .map((product, idx) =>
                idx < 3 ? (
                  <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
          <Link to='/shop/game'>
            <h4>Games - See All</h4>
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'game')
              .map((product, idx) =>
                idx < 3 ? (
                  <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
        </>
      )}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
    </>
  )
}

export default HomePage
