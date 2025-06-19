import express from 'express'
import { createProduct, getAllProducts, getSingleProduct } from '../../controllers/Product/index.js'
const router = express.Router()



router.get('/', getAllProducts)

router.post('/',createProduct)

router.get('/:id', getSingleProduct)

export default router