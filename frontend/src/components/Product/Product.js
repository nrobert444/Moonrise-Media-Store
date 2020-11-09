import React from 'react'
// import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  ConditionContainer,
  PriceContainer
} from './Product.styles'

// const Product = ({ product }) => {
//   const { _id, name, image, price, condition } = product
//   return (
//     <>
//       <Link to={`/product/${_id}`}>
//         <Card className='my-3 p-3 bg-secondary'>
//           <Card.Img
//             src={image}
//             variant='top'
//             style={{ height: '16rem', border: '1px solid grey' }}
//           />

//           <Card.Body>
//             <Card.Title as='div'>
//               <strong>{name}</strong>
//             </Card.Title>
//             <Card.Text as='h6'>{condition.toUpperCase()}</Card.Text>
//             <Card.Text as='h3'>${price}</Card.Text>
//           </Card.Body>
//         </Card>
//       </Link>
//     </>
//   )
// }

// export default Product

const Product = ({ product }) => {
  const { _id, name, image, price, condition } = product
  return (
    <>
      <Link to={`/product/${_id}`}>
        <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={image} />
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <ConditionContainer>{condition}</ConditionContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>
        </CollectionItemContainer>
      </Link>
    </>
  )
}

export default Product
