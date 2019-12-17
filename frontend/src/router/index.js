import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Login from '../views/users/Login.vue'
import NewPost from '../views/users/newPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'default' },
    component: Home
  },
  {
    path: '/post/:slug',
    meta: { layout: 'default' },
    component: Post
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'UserDefault' },
    component: Login
  },
  {
    path: '/new',
    meta: { layout: 'UserDefault' },
    component: NewPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
