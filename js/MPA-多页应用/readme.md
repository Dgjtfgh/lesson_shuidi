# SPA 单页应用
```html
<div id="app"></div>
<Route path="" component={}/>
```
单页 单个html
1. <div id="app"></div>
2. js 请求， app 构造
3. 看到页面

FMP(时间点): 第一次有意义的内容  等待时间很长
TTT: time to interactive

router  切换页面，不用整个页面都刷新

# SSR
1. <div id="app">肖申克的救赎</div>  直接可以看到页面

缺点：切换页面造成整个页面重新刷新

# 同构
SPA + SSR的优点
第一次访问：SSR 服务端构造 html 返回
之后用户的交互：通过 SPA *-router 来进行页面导航

# MPA(multiple-page-applition) 多页应用
多个 html  多个入口

每个 html  天然解耦  各部门业务互不相关
