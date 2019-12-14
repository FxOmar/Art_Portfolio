import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Login from '../Login.vue'
import NewPost from '../views/newPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:slug',
    component: Post
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/new',
    component: NewPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
