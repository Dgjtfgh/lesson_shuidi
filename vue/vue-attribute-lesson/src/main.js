import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 全局定义  绝对定位自定义指令
Vue.directive('abLocal', {
  // 指令第一次绑定到元素时
  bind(el, binding, vnode) {
    console.log("el:", el);
        console.log(el.style);
        console.log("color:", el.style.color);
        console.log("data-id:", el.dataset.id);
        console.log(binding);
        console.log(vnode);
    el.style.position = 'absolute';
    el.style.top = binding.value.top+'px';
    el.style.left = binding.value.left+'px';
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
