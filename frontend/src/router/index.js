import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Tagged from '../views/Tagged.vue'
import Login from '../views/users/Login.vue'
import ViewPosts from '../views/users/Posts.vue'
import ViewPages from '../views/users/Pages.vue'
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
  path: '/tagged/:slug',
  meta: {
    layout: 'default'
  },
  component: Tagged
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
    layout: 'UserDefault',
    requiresAuth: true
  },
  component: NewPost
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
  path: '/senku/posts',
  name: 'posts',
  component: ViewPosts,
  meta: {
    layout: 'boradDefault',
    requiresAuth: true
  }
},
{
  path: '/senku/pages',
  name: 'pages',
  component: ViewPages,
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
