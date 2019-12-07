const express = require('express')
const Blog = require('../db/db')

const router = express.Router()

router.get('/api/v1/posts', (req, res, next) => {
  Blog.find({}, (err, posts) => {
    if (err) throw err
    return res.status(200).send({
      success: true,
      message: 'Success',
      posts
    })
  })
})

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
  const posts = Blog({
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

router.get('/api/v1/posts/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  db.map((post) => {
    if (post.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'post retrieved successfully',
        post
      })
    }
  })
  return res.status(404).send({
    success: 'false',
    message: 'post does not exist'
  })
})

module.exports = router
