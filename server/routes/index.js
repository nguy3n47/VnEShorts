import express from 'express'
import newsRoutes from './news.route.js'

const router = express.Router()

router.use('/news', newsRoutes)

export default router
