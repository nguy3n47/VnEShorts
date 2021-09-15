import express from 'express'
import CategoriesController from '../controllers/categories.controller.js'

const router = express.Router()

router.route('/').get(CategoriesController.getCategories)

export default router
