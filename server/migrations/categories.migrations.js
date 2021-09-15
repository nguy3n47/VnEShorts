import Categories from '../models/categories.model.js'
import { data } from '../constants/categories.js'

const migrationsCategories = async () => {
  try {
    await Categories.insertMany(data)
  } catch (err) {
    console.error(err.stack)
  }
}

export default migrationsCategories
