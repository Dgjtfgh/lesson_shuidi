- 小程序
  最廉价的app开发 简单， 快速，高效

  前端入门最合适的综合应用

- 好牛
  组件 增强了的html标签
  swiper 二十几种组件
  index.wxml index.html wxml是界面的后缀
  index.wxss index.css

  vh  相对单位

- 看文档是最好的学习方式，indicator-dots = "{{true}}"
  {{}} 模板编译符 值 {{}}
- 数据绑定
  小程序的Page架构
  index.wxml  视图结构view  模板
  index.wxss  样式  类名 
  {{}}  为模板绑定数据 slides 在js data里定义
  被模板访问到  wx: for="{{slides}}"  item.image
  js Page({
      data: {
          
      }
  })

  - 小程序内置的编辑器很好用
    pages/index/index.wxml|wxss|js|json
    把应用连接起来，
    wx.navigateTo 
- app.wxss app.json app.js 作用于全局6
