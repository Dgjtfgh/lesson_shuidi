import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import SignUp from '../views/SignUp.vue'
import CheckPhone from '../components/SignUp/CheckPhone.vue'
import Info from '../components/SignUp/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    children: [
      { 
        path: '/',
        name: 'CheckPhone',
        component: CheckPhone
      },
      { 
        path: 'info',
        name: 'Info',
        component: Info
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
