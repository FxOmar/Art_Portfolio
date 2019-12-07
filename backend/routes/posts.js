const express = require('express')
const Posts = require('../db/posts')

const router = express.Router()

// Get all
router.get('/api/v1/posts', (req, res, next) => {
  Posts.find({}, (err, posts) => {
    if (err) throw err
    return res.status(200).send({
      success: true,
      message: 'Success',
      posts
    })
  })
})

// Get by ID
router.get('/api/v1/posts/:id', (req, res, next) => {
  const id = req.params.id
  Posts.findById(id, (err, post) => {
    if (err) throw err

    return res.status(200).send({
      success: 'true',
      message: 'post retrieved successfully',
      post
    })
  })
})

// add new post
router.post('/api/v1/posts', (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      success: 'False',
      message: 'title is required'
    })
  } else if (!req.body.body) {
    return res.status(400).send({
      success: 'False',
      message: 'content is required'
    })
  }
  const posts = Posts({
    title: req.body.title,
    body: req.body.body
  })
  posts.save((err) => {
    if (err) throw err
    return res.status(201).send({
      success: 'true',
      message: 'post added successfully',
      posts
    })
  })
})

// Update posts by ID
router.put('/api/v1/posts/:id', (req, res, next) => {
  const id = req.params.id

  // get a user with ID of 1
  Posts.findById(id, (err, post) => {
    if (err) throw err;

    const update = {
      title: req.body.title,
      body: req.body.body
    }
    if (update.title)
      post.title = req.body.title
    if (update.body)
      post.body.body = req.body.body

    post.save((err) => {
      if (err) throw err
       console.log('Post successfully updated!');
    })
  });
})

module.exports = router
























