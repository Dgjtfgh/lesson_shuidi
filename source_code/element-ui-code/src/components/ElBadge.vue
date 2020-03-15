<template>
    <div class="el-badge">
        <slot></slot>
        <sup 
            v-show="!hidden && (content || content === 0 || isDot)"
            class="el-badge__content"
            :class="[
                'el-badge__content--' + type,
                {
                    'is-fixed': $slots.default,
                    'is-dot': isDot
                }
            ]"
            v-text="content"></sup>
    </div>
</template>
<script>
export default {
    name: 'ElBadge',
    props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  },
  computed: {
    content() {
      if (this.isDot) return;
      // 整数输出 ，  max最大提示 如：99+
      const value = this.value;
      const max = this.max;
      if (typeof value === 'number' && typeof max === 'number') {
          console.log(111)
        return max < value ? `${max}+` : value;
      }
      return value;
    }
  }
}
</script>
