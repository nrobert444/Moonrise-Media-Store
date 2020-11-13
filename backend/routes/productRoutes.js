import express from 'express'
import {
  getProducts,
  getTopProducts,
  getProductById,
  getProductsCategoryDvd,
  getProductsCategoryBluray,
  getProductsCategoryGames,
  deleteProductById,
  createProduct,
  updateProduct
} from '../controllers/productController.js'
import { isAdmin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, isAdmin, createProduct)
router.route('/top').get(getTopProducts)
router.route('/dvd/').get(getProductsCategoryDvd)
router.route('/bluray/').get(getProductsCategoryBluray)
router.route('/games/').get(getProductsCategoryGames)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProductById)
  .put(protect, isAdmin, updateProduct)
export default router
