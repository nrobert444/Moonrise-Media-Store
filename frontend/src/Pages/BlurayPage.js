import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import BluRayPaginate from '../components/BluRayPaginate'

const BlurayPage = () => {

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

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
