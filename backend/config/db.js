import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log(`Mongoose connected: ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold)
    process.exit(1)
  }
}
export default connectDb
