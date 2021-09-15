import app from './config/express.js'
import mongoose from './config/mongoose.js'

const port = process.env.PORT || 8000

mongoose.connect()

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
