import React from 'react'
import { Link } from 'react-router-dom'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './Product.styles'

const Product = ({ product }) => {
  const { _id, name, image, price } = product
  return (
    <>
      <Link to={`/product/${_id}`}>
        <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={image} />
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>
        </CollectionItemContainer>
      </Link>
    </>
  )
}

export default Product
