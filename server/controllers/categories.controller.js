import Categories from '../models/categories.model.js'

export default class CategoriesController {
  static async getCategories(req, res, next) {
    try {
      const data = await Categories.find({})
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}
