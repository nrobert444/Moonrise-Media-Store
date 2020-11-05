import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'

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
          <ProductCarousel />
          <Link to='/shop/dvd'>
            <h4 className='mt-3 mb-3'>DVDs - See All</h4>
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'DVD')
              .map((product, idx) =>
                idx < 4 ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product._id}
                    className='bg-dark'
                  >
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
          <Link to='/shop/bluray'>
            <h4 className='mt-3 mb-3'>Blu-Rays - See All</h4>
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'Blu-Ray')
              .map((product, idx) =>
                idx < 4 ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product._id}
                    className='bg-dark'
                  >
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
          <Link to='/shop/games'>
            <h4 className='mt-3 mb-3'>Games - See All</h4>
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'GAME')
              .map((product, idx) =>
                idx < 4 ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product._id}
                    className='bg-dark'
                  >
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
        </>
      ) : (
        <>
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
          <Row>
            {products
              .filter(product => product.category === 'DVD')
              .map((product, idx) =>
                idx < 4 ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product._id}
                    className='bg-dark'
                  >
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
          <Row>
            {products
              .filter(product => product.category === 'Blu-Ray')
              .map((product, idx) =>
                idx < 4 ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product._id}
                    className='bg-dark'
                  >
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
          <Row>
            {products
              .filter(product => product.category === 'GAME')
              .map((product, idx) =>
                idx < 4 ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={product._id}
                    className='bg-dark'
                  >
                    <Product product={product} />
                  </Col>
                ) : (
                  ''
                )
              )}
          </Row>
        </>
      )}
    </>
  )
}

export default HomePage
