<template>
<transition name="el-alert-fade">
    <div 
        class="el-alert"
        :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
        v-show="visible"
    >
        <i class="el-alert__icon" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>
        <div class="el-alert__content">
            <span class="el-alert__title">
                {{title}}
            </span>
            <p class="el-alert__description" v-if="description" >{{description}}</p>
            <i class="el-alert__closebtn" 
            :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" 
            v-show="closable" 
            @click="close()"
            >
            {{closeText}}
            </i>
        </div>
    </div>
</transition>
</template>

<script>
// 常量  约定大于配置 
const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};
export default {
    name: 'ElAlert',
    props: {
        type: {
            type: String,
            default: 'info' /**使用好默认值 */
        },
        title: {
            type: String,
            default: ''
        },
        center: Boolean,
        effect: {
            type: String,
            default: 'light',
            validator: function(value) {
                // 其中之一
                return ['light', 'dark'].indexOf(value) !== -1;
            }
        },
        description: {
            type: String,
            default: ''
        },
        showIcon: Boolean,
        closable: {
            type: Boolean,
            default: true
        },
        closeText: {
            type: String,
            default: ''
        }
    },
    computed: {
        // 计算属性
        typeClass() {
            return `el-alert--${ this.type }`
        },
        iconClass() {
            return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
        },
        isBigIcon() {
            return this.description ? 'is-big' : '';
        }
    },
    data() {
        return {
            visible: true
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('close');  // 子组件向父组件传值
        }
    },
}
</script>