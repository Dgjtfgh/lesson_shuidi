<template>
<div 
    :class="['k-button--' + type]"
    class="k-button">
    <slot></slot>
</div>
</template>
<script>
export default {
    name: 'k-button',
    props: {
        type: String,
        default: 'default'
    }
}
</script>
<style scoped>
.k-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>