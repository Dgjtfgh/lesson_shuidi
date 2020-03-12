<template>
    <button
        class="el-button"
        @click="handleClick"
        :type="nativeType"
        :autofocus="autofocus"
        :class="[
            type ? 'el-button--' + type : '',
            {
                'is-round': round,
                'is-plain': plain,
                'is-loading': loading,
                'is-circle': circle
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
            default: true
        },
        plain: {
            type: Boolean,
            default: false
        },
        icon: String,
        loading: Boolean,
        autofocus: Boolean,
        circle: Boolean
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>