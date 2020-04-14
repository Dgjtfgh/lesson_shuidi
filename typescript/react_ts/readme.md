# react ts

webpack-dev-server  webpack 编译  启动live-server http 服务  start  dev
webpack  编译

1. --inline 刷新浏览器  --hot 加载修改部分
    热更新 让页面做到局部更新 不用丢失组件状态 MVVM
2. hash   是什么
    文件版本  app.[hash].js
    静态文件会缓存
3. babelrc  presets env modules  干啥？
4. entry 多入口作用是啥？
    entry 从某个文件 require  import webpack  __require__
    单点入口， 组织起来一个依赖关系  业务经常改变， hash需要  通知客户端更新
    把几个月  永远不更新的文件 作为独立的入口
    entry 可以有多个打包入口吗？
    vendor 库   vue.js  vuex  vue-router
    提升编译速度， 同时保障及改善了用户的浏览体验  缓存
5. tsx 在工作流是如何完成编译支持的
    resolve.extendsion tsx -> module, test .tsx? -> awesome-typescript-loader -> tsconfig.json jsx -> react -> babel
    jsx 良好表现的template 语法
- dist 目录不删除再生成？ 