import app from './config/express.js'
import mongoose from './config/mongoose.js'
import crawlNews from './utils/crawl.js'
import { wakeDynos } from 'heroku-keep-awake'

const PORT = process.env.PORT || 8000
const DYNO_URLS = [
  'https://vneshorts.herokuapp.com',
  'https://vneshorts-api.herokuapp.com',
]

// MongoDB connection
mongoose.connect()

// Crawl News
setInterval(function () {
  crawlNews().catch(console.error)
}, 5 * 60 * 1000)

app.listen(PORT, () => {
  wakeDynos(DYNO_URLS)
  console.log(`🚀 Server listening on port: ${PORT}`)
})
