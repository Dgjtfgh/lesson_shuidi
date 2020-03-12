<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <carousel height="150px">
      <carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{item}}</h3>
      </carousel-item>
    </carousel>-->
    <!-- <carousel-item /> -->
    <el-button
      type="success"
      :plain="true"
      icon="el-icon-search"
      round
      nativeType="reset"
      @click="search"
    >搜索</el-button>
    <div>
      <!-- 容器式组件 -->
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">
        下一页
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
    </div>
    <!-- <el-alert 
    title="成功提示的文案" 
    type="error"
    description=""
    closeText=""
    >
    </el-alert>-->
  </div>
</template>

<script>
import ElAlert from "./components/ElAlert.vue";
import ElButton from "./components/ElButton.vue";
import ElButtonGroup from "./components/ElButtonGroup.vue";

export default {
  name: "App",
  components: {
    "el-alert": ElAlert,
    "el-button": ElButton,
    "el-button-group": ElButtonGroup
  },
  methods: {
    search(evt) {
      console.log(evt);
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
/* html, body {
  background-color: green;
} */
</style>
