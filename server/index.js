import app from './config/express.js'
import mongoose from './config/mongoose.js'
import crawlNews from './utils/crawl.js'

const port = process.env.PORT || 8000

mongoose.connect()

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})

setInterval(function () {
  crawlNews().catch(console.error)
}, 5 * 60 * 1000)
