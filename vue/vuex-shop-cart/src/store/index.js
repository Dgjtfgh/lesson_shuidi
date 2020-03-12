// 数据管理的地方部门
import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/api/shop.js';
Vue.use(Vuex);

let products = [];
Api.getProducts((_products) => {
  // console.log(_products);
  products = _products;
});

export default new Vuex.Store({
  state: {  // data   react redux
    products: []
  },
  getters: {
    products(state) {
      return state.products;
    }
  },
  mutations: {
    updateProducts(state, _products) {
      state.products = _products;
    }
  },
  actions: {
    async getProducts({ commit }) {
      products = await Api.getProducts();     
      commit('updateProducts', products);
    }
  },
  modules: {
  }
})
