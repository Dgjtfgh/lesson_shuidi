界面的宏观视角

结构>组件 (cell)
组件：界面构成的基础，拼积木一样来搭建页面
结构的套路
.weui-cell  开启一个组件
  .weui-cell__hd  Element命名方案
  .weui-cell__bd
  .weui-cell__ft
hd + bd + ft
__ 子元素关系 BEM (Block Element Modifier)

- 研究微信官方的前端框架weui源码
- BEM 挺好的，类名取名的依据
- .hd + .bd + .ft  少跟业务相关，多一些抽象
- 弹性布局 align-items: center; flex: 1;