import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.prototype.$store = store  // 把store挂载到了全局

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
