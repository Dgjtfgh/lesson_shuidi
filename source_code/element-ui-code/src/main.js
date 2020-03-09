import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入组件 想成为全局组件
import Carousel from './components/carousel/index.js'
import CarouselItem from './components/carousel-item/index.js'

// console.log(Carousel);
// Carousel.install(Vue);
// CarouselItem.install(Vue);
// Vue.use(ElementUI)
// 放入一个数组
const components = [
  Carousel,
  CarouselItem
]

const install = function(Vue) {
  components.forEach(component => {
    //Vue.component  vue中语法，可以全局引入组件的api
    console.log(component);
    Vue.component(component.name, component);
  })
}
// Vue.use  会调用对象的install方法
install(Vue)  // 安装一下

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
