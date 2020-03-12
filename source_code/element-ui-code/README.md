1. element-ui  源码在哪里？  node_modules/element-ui

2. github  elementui   边看代码边实现一下

3. 写出来element-ui 组件
  css文件引入留下， 将 Vue.use(ElementUI)注释

- 学到代码风格
  属性一个一行   有利于代码可读
- :class 的用法  []  有多个动态的样式要输出
  computed 属性  根据props 再计算
- props 高级声明
  type: {                 // props   name
            type: String, // 类型
            default: '默认值',
            validate: function(){}  return boolean
        }
  ['type', 'title']  // 粗线条的，不能做太多的检测

  1. 怎么样使用Element-ui
  import ElementUI from 'element-ui'
  Vue.use(ElementUI)
  所有的组件就全局可使用了
    - Vue.use  背后在干什么？
    - 如果我只能使用部分组件，而不是所有 怎么解决？
    js 越少越少，项目中用不到所有组件，只使用部分，怎么实现？

    - 每个组件都是一个目录
      carousel 组件  设计成一个父子组件 各司其职  拆分的足够细
      cerousel-item
      划分职责
      容器组件  横向 | 竖向  自动滚动  @change  interval
      子组件  slot

- element-ui  组件开发， 框架， 难度以及标准度， 专业度， 由多人，多个部门协作
  一个组件就像一个项目一样来开发
  index.js  方便安装  install

# ElButton
  - components/ElButton
  - 保留css   focus组件设计
  - type 生成不同类名  computed
    is-plain   is-round
    :class
    icon
    slot  v-if
  - disabled  手动去禁用
  - loading   加载中   处理中...   不能再点击
  - icon      只显示一种状态


