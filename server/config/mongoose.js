import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected')
})

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected')
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected')
})

mongoose.connection.on('close', () => {
  console.log('MongoDB close')
})

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
      })
    } catch (err) {
      console.error(err.stack)
      process.exit(1)
    }
  },
}

export default db
