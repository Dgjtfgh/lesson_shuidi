- js 是单线程的， 请问这个单线程包括 setTimeout  promise addEventListener这些吗？
是什么样的单线程？
  渲染进程  input  dom input(file) -> css  通过与浏览器主进程通信，主进程读取磁盘图片数据返回给渲染进程，(URL  FileReader) 
渲染进程里的js 发起ajax 请求，是通过浏览器主进程去调用网络进程发生请求，还是渲染进程可以直接通过调用网络进程发送请求？
    渲染进程会通知网络进程，网络进程会和渲染进程建立数据通道传输数据。
Ajax 请求 new XMLHttpRequest  单线程
底层 独立于js 引擎之外的 xmlhttpRequest  http进程
  js  es6 它是以什么身份登场的？ ActiveXObject

  chrome 打开进程   为什么每个tab 新开一个进程？
    更快   dom css  layout js 执行
    更安全   沙箱

  chrome 之前，浏览器所有tab 都是公用一个进程

  渲染进程  JS 单线程的宿主
  1. JS 单线程是指V8引擎的单线程 只指 词法 语法 上下文环境 AST ...
    tab  启动 新的进程

1. GUI渲染线程
  负责渲染浏览器界面   html, css, 构建DOM树， 布局与绘制
  底部的js 会执行
  多线程会让简单的web编程变得复杂
2. 事件触发进程
  事件循环队列   先进先出
  不属于渲染线程， 属于浏览器
3. http请求线程
4. 定时器线程
js 单线程 = js 引擎线程

闭包， 引用式赋值，动态 ，作用域 隐式内省转化  -》 JS 内存概念

理解JS 内存机制
1. JS 语言需要手动打理内存吗？
    不需要
2. 词法分析的
    引用式赋值
    简单数据(变量 常量) -> 栈空间
    复杂数据     ->   堆空间
    1. 堆  树？ 堆排序
    2. 为什么在有栈空间 还要有堆空间？
        JS引擎需要用栈空间来维护程序执行期间上下文的状态，
        如果栈空间太大会影响切换的效率。所以引入堆空间。

- 闭包
    会在堆空间中创建clourse(foo)对象存放闭包的变量