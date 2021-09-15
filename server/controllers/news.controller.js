import News from '../models/news.model.js'
import Categories from '../models/categories.model.js'

export default class NewsController {
  static async getNews(req, res, next) {
    try {
      const size = req.query.size ? Number(req.query.size) : 20
      const skip = req.query.page ? Number(req.query.page) : 0
      const category = await Categories.findOne({ slug: 'tin-moi-nhat' })
      const data = await News.find({ category_id: category._id })
        .limit(size)
        .skip(size * skip)
        .sort({ date: -1 })

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getNewsByCategory(req, res, next) {
    try {
      const size = req.query.size ? Number(req.query.size) : 20
      const skip = req.query.page ? Number(req.query.page) : 0
      const slug = req.params.category
      const category = await Categories.findOne({ slug })
      const data = await News.find({ category_id: category._id })
        .limit(size)
        .skip(size * skip)
        .sort({ date: -1 })

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}
