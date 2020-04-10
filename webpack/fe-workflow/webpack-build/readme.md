## 前端工作流 workflow  webpack


- webpack 架构
  1. 源头  package.json
  webpack  不直接出场    架构 dev build
  cross-env  服务器无差别环境变量配置   node npm 都用哪些？
  并行同时考虑工作流架构
  将编译工作(工作流) 通过目录  开发架构的一项
  2. webpack  重要性
  写代码    养孩子是一样的  每天运营项目
  改了一点   webpack build
  3. base.js  同时服侍 dev.js build.js
  模块化  把基础配置做好，  向外输出
  4. webpack  其他的module及插件处理呢？
    config
  5. lib  把module 放在config 目录下  一个文件一件事
    findSync  把所有js 文件 组成数组输出
  6. 可拔插的webpack  插件
  - babel
    js   ts
  - css  压缩   stylus -> css
    postcss?
  - htmltemplate 

  webpack  通过module 将编译的事物 可拔插的load 进相应的模块进行处理
  webpack + 其他模块的生态链， 占据了工作流的生态位
  webpack  module  配置模块
  在每个模块之中有配置流程
    1. test   /.js$/
    2. loader
    3. 配置项
    webpack-chain    js
    ts 和 js 是一家的， ts 是js 的超集， 
    ts 有类型声明的js    降低js 出错率