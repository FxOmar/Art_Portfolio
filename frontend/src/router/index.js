import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Login from '../views/users/Login.vue'
import UserBoard from '../views/users/UserBoard.vue'
import ViewPosts from '../views/users/Posts.vue'
import NewPost from '../views/users/newPost.vue'
import Profile from '../views/users/profile.vue'
import store from '../store.js'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  meta: {
    layout: 'default'
  },
  component: Home
},
{
  path: '/post/:slug',
  meta: {
    layout: 'default'
  },
  component: Post
},
{
  path: '/login',
  name: 'login',
  meta: {
    layout: 'UserDefault',
    guest: true
  },
  component: Login
},
{
  path: '/user/new',
  meta: {
    layout: 'boradDefault',
    is_admin: true,
    requiresAuth: true
  },
  component: NewPost
},
{
  path: '/dashboard',
  name: 'userboard',
  component: UserBoard,
  meta: {
    layout: 'boradDefault',
    requiresAuth: true
  }
},
{
  path: '/profile',
  name: 'profile',
  component: Profile,
  meta: {
    layout: 'boradDefault',
    requiresAuth: true
  }
},
{
  path: '/dashboard/posts',
  name: 'posts',
  component: ViewPosts,
  meta: {
    layout: 'boradDefault',
    requiresAuth: true
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
