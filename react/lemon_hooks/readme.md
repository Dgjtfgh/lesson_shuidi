react + ts + hooks
react + redux + react-router 

1. sourcemap
2. --inline
3. polyfill
4. css 处理
5. react 新特性带来的fragment

js 的责任 babel
npm i @babel/cli @babel/core  @babel/preset-env @babel/polyfill --save-dev
es6+  低端浏览器可以被支持？
三个：
  1. babel-preset-env + babel-core  降级处理
  const let var  () => {}  function() {}
  2. polyfill  会把一些无法降级的  Promise Array map reduce 手工实现一下  垫片
  if (typeof object.create !== "function") {}
  polyfill 做判断  不是所有的浏览器都做同样的打补丁
  打补丁前  先判断下浏览器是否拥有此功能
  3. plugin

inline  hot 区别
webpack-dev-server --mode development --inline --hot --open
inline  hot  都是改变后 刷新内容， inline 强制刷新， 弊端是mvvm 状态会丢失
hot  hmr  hot module reload --inline --hot 
如果是hmr 部分更新 hot 如果不是hmr 部分， inline 强制刷新

css 
  1. style -> .css 输出
  2. 编译时 css 压缩
  3. 如何调试这个bug  p color: xxxx;
  style-loader 开发的时候
  定位p  color 错误， style 代码很多  你忘了错误在哪里
  webpack  帮我们定位错处 点一下就能跳到错误所在的源码所在行