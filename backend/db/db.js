// Import the mongoose module
const mongoose = require('mongoose')

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/blog'
mongoose.connect(mongoDB, { useNewUrlParser: true })

//  Get the default connection
let db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('> successfully opened the database')
})

const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
