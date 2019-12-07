<template>
  <h1>Hello, world</h1>
</template>

<script>
import jwt from 'jsonwebtoken'
export default {
  name: 'login',
  data () {
    return {
      username: 'omarchadidi@gmail.com',
      password: '123456789'
    }
  },
  mounted () {
    this.login()
  },
  methods: {
    login () {
      // Admin API key goes here
      const key = '5de1bb115c025a1dbbaeae9d:b70f24ebbe24d005c8035a60c6ee34a9e931fe35f6f77e6d3a30699105e640fb'

      // Split the key into ID and SECRET
      const [id, secret] = key.split(':')

      // Create the token (including decoding secret)
      const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
        keyid: id,
        algorithm: 'HS256',
        expiresIn: '5m',
        audience: `/v3/admin/`
      })

      // Make an authenticated request to create a post
      const url = 'http://localhost:2368/ghost/api/v3/admin/posts/'
      const headers = { Authorization: `Ghost ${token}` }
      const payload = { posts: [{ title: 'Hello World' }] }
      this.axios.post(url, payload, { headers })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  }
}
</script>
