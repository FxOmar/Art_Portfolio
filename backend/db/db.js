// Import the mongoose module
const mongoose = require('mongoose')

// Set up default mongoose connectio
const mongoDB = 'mongodb://127.0.0.1/blog'
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

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
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  },
  created_at: Date,
  updated_at: Date
})

// on every save, add the date
blogSchema.pre('save', function(next) {
  // get the current date
  let currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
