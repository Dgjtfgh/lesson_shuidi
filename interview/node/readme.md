1. 在用node 读一个文件的时候，发生了什么？
    node api  IO 处理  异步 ...

- 1. node 架构层
    v8  babel  webpack   抽象语法树 AST
    中间层  fs  ... 

    2. 前端  webkit 中间层   可以是什么？
        html5  调用摄像头  文件  存储...
    3. JS可以用于什么应用场景，它的架构是什么？
        electron   chrome -> chromium
    4. 小程序  html -> wxml  css -> wxss
    5. RN 

- 2. node 底层架构 
    - 上层 API 层
        调用node 的API层 fs 模块相关功能
    - node.js Bindings    c++  对fs 模块的实现
    - node.js 底层  基于事件机制的 node event loop stream 流操作  libuv 
        libuv 内部封装了对event loop  stream
        v8 
        c-ares  异步的DNS 请求库
        http_parser\  OPENSSL, zlib
        libuv 是一个高性能、事件驱动的I/O库，并且提供了跨平台(windows/linux)的API,
        异步， 事件驱动的编程风格，核心使命是提供一个event loop 定时器，基于I/O 和其他事件的回调函数    非阻塞的网络支持，异步文件系统访问 子进程

        JS 是单线程的， 但是libuv 并不是

- 执行顺序  event loop
    前后端 有区别

    1. event loop 在前后端的区别
        事件驱动 + 循环事件栈
    2. 不一样的结果？   node 版本不一样
        老版本 node 里 每次执行一个宏任务时， setTimeout setInterval , 会清空回调队列timer栈  再执行微任务队列
        前端及node v11后   event loop
            每次执行一个宏任务时， 会检查微任务队列

        node 任务队列比较多 
        IO操作 poll栈  timer栈  check栈
        timer栈 =》 poll栈 =》 check栈

        koa(实例) -> events -> stream -> fs/net/http(异步) libuv  

- Buffer
    js 没有二进制的数据类型，Buffer用于解决这个问题。
    1. js 语言本身， 对于进制和位处理不够， Buffer 补刀
    2. node 应用场景  IO  网络层  都是二进制 buffer 性能及处理能力优秀

- stream  流操作  node 中最美好的