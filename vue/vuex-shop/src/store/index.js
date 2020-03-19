import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products' // 集中管理products数据
import cart from './modules/cart'
Vue.use(Vuex)
// 单一状态树
export default new Vuex.Store({
  state: { // 根节点
    // 为空  未登录   全局共享状态
    userInfo: {
      uid: 10001,
      username: '腾哥'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: { // 当应用复杂起来的时候
    cart,  
    products
  }
})
