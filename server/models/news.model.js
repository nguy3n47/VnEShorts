import mongoose from 'mongoose'

const { Schema } = mongoose
const newsSchema = new Schema(
  {
    title: String,
    link: String,
    image: String,
    content: String,
    description: String,
    date: Date,
    category_id: { type: Schema.Types.ObjectId, ref: 'Categories' },
  },
  {
    timestamp: true,
  }
)

const News = mongoose.model('news', newsSchema)

export default News
