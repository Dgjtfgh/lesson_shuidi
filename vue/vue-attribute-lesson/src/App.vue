<template>
  <div id="app" data-id="0" style="color: green"  v-abLocal="{top: '50', left: '100'}">   
    <p >
      字段1:
      <input data-id="1" style="color: green" v-model="info1" v-focus>
      字段2:
      <input data-id="2" style="color: green" v-model="info2" >
    </p>
    <p id="computed-example">连接: {{ connectInfo }}</p>
    <p id="filters-example">全部大写: {{connectInfos | capitalize}}</p>
    <Child :info="connectInfos"></Child>
  </div>
</template> 

<script>
import child from "./components/child_component"
export default {
  data() {
    return {
      info1: '',
      info2: '',
      connectInfos: ''
    }
  },
  computed: {
    // 计算属性的 getter
    connectInfo: function () {
      // `this` 指向 vm 实例
      this.connectInfos = this.info1 + this.info2;
      return this.connectInfos;
    }
  },
  filters: {
    capitalize(word) {
      return word.toUpperCase();
    }
  },
  watch: {
    info1: function(newInfo, oldInfo) {
      // console.log("旧值：", oldInfo);
      // console.log("新值：", newInfo);
    }
  },
  components: {
    Child: child
  },
  
  directives: {
    focus: {
      // 指令的定义
      // 当被绑定的元素插入到 DOM 中时
      inserted: function (el, binding, vnode) {
        // console.log("el:", el);
        // console.log(el.style);
        // console.log("color:", el.style.color);
        // console.log("data-id:", el.dataset.id);
        // console.log(binding);
        // console.log(vnode);
        el.focus();
      }
    },
    clear: {
      // inserted: function(el, binding) {
      //   handle() {

      //   }
      // }
    }
  },
  methods: {
    
  }
}
</script>

<style>
  /* @import "https://cdn.bootcss.com/twitter-bootstrap/3.3.5/css/bootstrap.min.css" */
</style>
