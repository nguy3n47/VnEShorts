import express from 'express'
import newsRoutes from './news.route.js'
import categoriesRoutes from './categories.route.js'

const router = express.Router()

router.use('/news', newsRoutes)
router.use('/categories', categoriesRoutes)

export default router
