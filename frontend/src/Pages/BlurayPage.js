import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import BluRayPaginate from '../components/BluRayPaginate'
import { listProductsBluray } from '../actions/productActions'

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
        <>
          <h1>Blu-Rays</h1>
          <Row>
            {products
              .filter(product => product.category === 'Blu-Ray')
              .map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
      <BluRayPaginate pages={pages} page={page} />
    </>
  )
}

export default BlurayPage
