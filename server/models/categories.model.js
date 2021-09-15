import mongoose from 'mongoose'

const { Schema } = mongoose
const categoriesSchema = new Schema(
  {
    name: String,
    slug: String,
  },
  { timestamps: { createdAt: 'created_at' } }
)

const Categories = mongoose.model('categories', categoriesSchema)

export default Categories
