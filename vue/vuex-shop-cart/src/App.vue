<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 数据晚一步考虑 -->
    <div v-for="(product, index) in $store.state.products" :key="index">
      <p> 商品名: {{product.title}} </p>
      <p> 价格: {{product.price}} </p>
      <p> 数量{{product.inventory}}</p>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Api from "@/api/shop.js";
// 方法， 怎么把vuex store state products
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      // products: []
    }
  },
  computed: {
    // ...mapState(["products"]),
    ...mapGetters(['products'])
  },
  components: {
    // HelloWorld
  },
  mounted () {
    // Api.getProducts((_products) => {
    //   this.products = _products;
    // });
    // console.log(this.$store);
    let products = this.getProducts();
    this.updateProducts(products);
  },
  methods: {
    ...mapMutations(['updateProducts']),
    ...mapActions(['getProducts'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
