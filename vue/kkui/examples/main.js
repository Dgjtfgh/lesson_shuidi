// examples/main.js
import Vue from 'vue'
import App from './App.vue'

import kkui from '../packages'
Vue.use(kkui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
