import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Goods from '../views/Goods.vue'
import GoodsDetails from '../views/GoodsDetails.vue'
import store from '../store/index.js'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Index,
    children: [
      {
        name: 'home',
        path: 'home',
        component: Home
      },
      {
        name: 'goods',
        path: 'goods',
        component: Goods
      },
      {
        path: 'goodsDetails',
        name: 'goodsDetails',
        component: GoodsDetails
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  // 明确标题的地方
  // document.title = to.meta.title // 设置title
  // console.log(to.meta.login)
  if (to.name === 'goods') { // 需要登录
    // console.log(to.name)
    // console.log(store.state.login)
    if (!store.state.login) {
      next({
        path: '/login'  // 授权
      })
    } else {
      next();
    }
  }
  next();
})

export default router
