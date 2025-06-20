import express from 'express'
import { createProduct, getAllProducts, getSingleProduct } from '../../controllers/Product/index.js'
import { addToCart, fetchCart } from '../../controllers/Cart/index.js'
const router = express.Router()



router.post('/', addToCart)
router.get('/', fetchCart)

export default router