import express from 'express'
import connectDb from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
connectDb()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
})
