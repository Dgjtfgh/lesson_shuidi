// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

import { Cell, CellGroup, Radio, Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Tab, Tabs, PullRefresh, Tabbar,TabbarItem, Stepper, Checkbox, CheckboxGroup  } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe)
.use(SwipeItem).use(Lazyload).use(List).use(Field)
.use(NavBar).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem)
.use(Stepper).use(PullRefresh).use(Checkbox).use(CheckboxGroup)
.use(Radio).use(Cell).use(CellGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
