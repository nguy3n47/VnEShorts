import express from 'express'
import NewsController from '../controllers/news.controller.js'

const router = express.Router()

router.route('/').get(NewsController.getNews)
router.route('/:category').get(NewsController.getNewsByCategory)

export default router
