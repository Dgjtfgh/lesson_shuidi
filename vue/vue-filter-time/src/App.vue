<template>
  <div id="app">
    时间  {{ t | format_date}}
    <div>{{moment()}}</div>
    <div>{{moment().format('YY-MM-DD HH:mm:ss')}}</div>
    <div>过去多少时间 {{moment().diff(moment(t), 'minutes')}}分钟前</div>
    <div>两年之后 {{moment('2020-02-29').add(2, 'year').format('YYYY-MM-DD')}}</div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'App',
  // 过滤器
  filters: {
    // format_data(value) {
    //   const date = new Date(value);
    //   return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    // }
  },
  data() {
    return {
      t: 1583399889113, // 时间戳
      moment
    }
  },
  computed: {
    // 计算属性
  },
  components: {
    
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
