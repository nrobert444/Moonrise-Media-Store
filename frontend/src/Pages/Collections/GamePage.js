import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from '../../components/Product/Product'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import GamePaginate from '../../components/GamePaginate'
import { listProductsGames } from '../../actions/productActions'

const GamePage = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productListGames = useSelector(state => state.productListGames)
  const { loading, error, products, page, pages } = productListGames

  useEffect(() => {
    dispatch(listProductsGames(pageNumber))
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
          <h1>Games</h1>
          <Row>
            {products
              .filter(product => product.category === 'GAME')
              .map(product => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
      <GamePaginate pages={pages} page={page} />
    </>
  )
}

export default GamePage
