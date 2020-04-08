# 从输入URL到页面展示， 这中间发生了什么？

- 发出请求？

动手实操
1. 浏览器  proxy  通过浏览器来代理我们访问网页
    可以当搜索框来用   默认的搜索引擎
    url
    juejin.im   补全为 https://juejin.im/  补全协议
2. 浏览器中  操作系统里的进程
    web  访问  浏览器chrome  多进程的架构模式  最流畅 更耗内存
    打开一个页面 至少有4个进程
    主进程  管家 chrome 浏览器
    子进程  
        GPU进程  GPU加速   3d渲染 (canvas three.js  css中transform3d)
        NetWork Service
        标签页
    并行执行

    - 浏览器主进程   
        启动浏览器  提供交互(输入url)  子进程管理(进程间通信 IPC)
        文件存储功能(文件缓存 cookie localstorage ...)
    - 渲染进程 GPU    html,css,js,图片  形成可交互的界面
    - 网络进程 提供下载功能
    执行过程 
      1. 浏览器进程收到用户输入的URL   请求时  在主进程， IPC 将url交给  网络进程 
      2. 网络进程中发起真正的URL请求  url请求是由 c++模块 node -> c++
        2.1 request
        2.2 response
      3. 网络进程接收到了响应头数据， 通知 渲染进程开始准备干活
        如何提前通知渲染进程？
            通过浏览器进程 提交导航消息(CommitNavigation)  消息到渲染进程
            网络协议 TCP  HTTP
          1. DNS  解析 DNS服务器(Domain Name Server)
      4. 渲染进程收到提交导航消息后， 开始准备接收(某格式)  直接和网络进程建立数据通道
      5. 渲染进程会向浏览器进程发送"确认提交"，准备好接收和解析页面数据
      6. body 到了 (if/else 移除之前的页面) 渲染进程渲染。 页面的重绘和重排   向浏览器进程提交确定文档消息

