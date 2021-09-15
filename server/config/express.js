import express from 'express'
import cors from 'cors'
import routes from '../routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'VnEShorts API v1',
  })
})
app.use('/api/v1', routes)
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }))
app.use((err, req, res, next) => {
  if (err.status && err.name) {
    return res.status(err.status).json({
      message: err.message,
    })
  }
  next()
})

export default app
