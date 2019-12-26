const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postsSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  hidden: Boolean,
  tags: [
    {
      name : String,
      slug : String
    }
  ],
  created_at: Date,
  updated_at: Date
})

// on every save, add the date
postsSchema.pre('save', function(next) {
  // get the current date
  let currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const Posts = mongoose.model('Posts', postsSchema)

module.exports = Posts


