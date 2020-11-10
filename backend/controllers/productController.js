import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all product Routes || find by keyword search
//@route GET /api/products/
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i'
        }
      }
    : {}
  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

//@desc Fetch all product routes by category DVD
//@route GET /api/products/dvd/
//@access public
const getProductsCategoryDvd = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({ category: /DVD/ })
  const products = await Product.find({ category: /DVD/ })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})
//@desc Fetch all product routes by category Bluray
//@route GET /api/products/bluray/
//@access public
const getProductsCategoryBluray = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({ category: /Blu-Ray/ })
  const products = await Product.find({ category: /Blu-Ray/ })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})
//@desc Fetch all product routes by category Games
//@route GET /api/products/games/
//@access public
const getProductsCategoryGames = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({ category: /GAME/ })
  const products = await Product.find({ category: /GAME/ })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
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
//@desc Create product
//@route POST /api/products/
//@access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: '',
    price: 0,
    user: req.user._id,
    image: '',
    upc: 0,
    category: 'DVD',
    countInStock: 0,
    condition: 'USED',
    description: ''
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})
//@desc update product by id
//@route PUT /api/products/:id
//@access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    upc,
    category,
    condition,
    countInStock
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.upc = upc
    product.condition = condition
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ upc: 'desc' }).limit(3)

  res.json(products)
})
export {
  getProducts,
  getTopProducts,
  getProductById,
  getProductsCategoryDvd,
  getProductsCategoryBluray,
  getProductsCategoryGames,
  deleteProductById,
  createProduct,
  updateProduct
}
