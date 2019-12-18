const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
        max: 255
    },
    password: {
        required: true,
        type: String,
    },
    created_at: Date,
    updated_at: Date
})

// on every save, add the date
UserSchema.pre('save', function(next) {
    // get the current date
    let currentDate = new Date();
  
    // change the updated_at field to current date
    this.updated_at = currentDate;
  
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
      this.created_at = currentDate;
  
    next();
})

const User = mongoose.model('User', UserSchema)

module.exports = User