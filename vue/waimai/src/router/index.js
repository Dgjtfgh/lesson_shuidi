import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
  },
  {
    path: '/ratings',
    name: 'Ratings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ratings.vue')
  },
  {
    path: '/seller',
    name: 'Seller',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seller.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
