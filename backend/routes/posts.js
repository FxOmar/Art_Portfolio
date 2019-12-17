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
  Posts.findById(req.params.id, (err, post) => {
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
  if (!req.body.title && !req.body.body) {
    return res.send({
      title: 'title is required',
      body: 'content is required'
    })
  }

  if (!req.body.title) {
    return res.send({
      title: 'title is required'
    })
  }

  if (!req.body.body) {
    return res.send({
      body: 'content is required'
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
  // get post by id
  Posts.findById(req.params.id, (err, post) => {
    if (err) throw err;

    const postInfo = {
      title: req.body.title,
      body: req.body.body
    }
    if (postInfo.title)
      post.title = req.body.title
    if (postInfo.body)
      post.body.body = req.body.body

    post.save((err) => {
      if (err) throw err
       console.log('Post successfully updated!');
    })
  });
})

// Delete Post by ID
router.delete('/api/v1/posts/:id', (req, res) => {
  Posts.findById(req.params.id, (err, post) => {
    if (err) throw err

    post.remove((err) => {
      if (err) throw err
      console.log('Post successfully deleted!')
    })
  })
})
module.exports = router
























