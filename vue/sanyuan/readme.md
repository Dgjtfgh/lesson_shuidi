逐行读vue源码
1. 组件的本质是什么？
    历史来讲(前端变得复杂起来， jquery )   现在 vue 2.0 语法又来   未来 vue 3.0
    loadsh   jquery -> 强大的前端工具库RIA   MVVM
    模板编译的语法

    模板引擎的概念   模板(字符串+数据) = html


2. 问题
    模板编译之后，挂载到 挂载点上  mount
    工作流   webpack  vue-cli 
    除了 webpack.config.js + babel  有其他的方法码？
    parcel  轻量级   极速零配置web应用打包工具

    snabbdom 快速的DOM

- patch
    直接产出 html 变成产出 Virtual DOM

    组件 vnode -> 真实dom