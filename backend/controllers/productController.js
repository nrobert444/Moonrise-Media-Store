import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all product Routes
//@route GET /api/products/
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch product Route matching ID
//@route GET /api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found.')
  }
})

//@desc delete product by id
//@route DELETE /api/products/:id
//@access Private/Admin
const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed.' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductById, deleteProductById }
