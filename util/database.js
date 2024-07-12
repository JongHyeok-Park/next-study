import { MongoClient } from 'mongodb'
const url = `mongodb+srv://jhpmuscle:${process.env.DB_PASSWORD}@next-study.cc4z7ae.mongodb.net/?retryWrites=true&w=majority&appName=next-study`
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }