<template>
    <div id="child">
      <p>子组件</p>
      <p>{{info}}</p>
  </div>
</template>
 <<script>
 export default {
     props: ['info']
 }
 </script>