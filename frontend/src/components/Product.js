import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const { _id, name, image, price, condition } = product
  return (
    <>
      <Link to={`/product/${_id}`}>
        <Card className='my-3 p-3 rounded'>
          <Card.Img src={image} variant='top' style={{ height: '18rem' }} />

          <Card.Body>
            <Card.Title as='div'>
              <strong>{name}</strong>
            </Card.Title>
            <Card.Text as='h6'>{condition.toUpperCase()}</Card.Text>
            <Card.Text as='h3'>${price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default Product
