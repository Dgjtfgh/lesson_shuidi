<template>
    <button
        class="el-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :type="nativeType"
        :autofocus="autofocus"
        :class="[
            type ? 'el-button--' + type : '',
            buttonSize ? 'el-button--' + buttonSize : '',
            {
                'is-round': round,
                'is-plain': plain,
                'is-loading': loading,
                'is-circle': circle,
                'is-disabled': buttonDisabled
            }
        ]"
        >
        <i class="el-icon-loading" v-if="loading"></i>
        <i v-if="icon && !loading" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
        <!-- 按钮 -->
    </button>
</template>
<script>
export default {
    name: 'ElButton',
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },
    props: {
        type: {
            type: String,
            default: "default"
        },
        nativeType: {
            type: String,
            default: "button"
        },
        round: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        size: String,
        icon: String,
        loading: Boolean,
        autofocus: Boolean,
        circle: Boolean,
        disabled: Boolean,
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },
}
</script>