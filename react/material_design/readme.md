# material design  来自goole 的UI风格

特别的?
从css风格 =》 组件化 -> react入门

波浪的感觉
css  
- material design 的灵魂，在于对交互的创新
  波浪感，进度条的进度感
  移动端细节，  curcor: pointer  用的是非button 组件
  user-select: none
  stylus 嵌入式  ::after   :active::after

1. background-image 
  背景图片 url 引入方式， 在移动端时代， 渐变也可以生成
  即生成背景, 同时有没有用图片
  10% 白，  1%的透明
  transform: scale(12)    12 -> 0


- 我们要做一堆的按钮
为开发准备好基础组件  
提供 通用的， 变通的，各种常用要求  就叫组件
自己写下这些组件
css 有些变化 （状态  primary circle warning block）
html 区别
  1. 把它的样式封装进去
    button  样式是样式
    组件 (组合htnl, css, js)

- ReactDOM  React 跟DOM交互的库
  基本语法:
    定义一个button组件
    type 文字 block...   有通用性的需求
    <Boyfriend /> <Girlfriend />
    1. ReactDOM.render(<div> <Button></Button> </div>,
          document.getElementById('root)
       )
       JSX语法
       才可以在root 里面显示组件  组件 要编译
    2. function Button(props) {  // 函数封装 定义组件
        let { } = props          // 解构
        return (
            <div></div>
        )
    }