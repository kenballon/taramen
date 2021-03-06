import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/auth/Signup.vue'
import Login from '../views/auth/Login.vue'
import Admin from '../views/Admin.vue'
import { taramenAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = taramenAuth.currentUser;
 
  if (!user) {
    next({ name: 'Home' })
  }
  next();
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/taramen-login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: requireAuth
  }
  ,
  {
    path: '/menus-cat',
    name: 'MenuCat',
    component: () => import('../views/MenuCategories.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
