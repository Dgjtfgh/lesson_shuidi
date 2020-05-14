# 性能优化 跟安全

- http://www.baidu.com  发生什么？
    全栈启用https
    状态码
    304
    301  永久性跳转
    302  临时性跳转
        GET
        POST 2降级为GET
    307  临时性跳转
        POST 不会降级为GET

- 点击一个a标签  不跳转怎么做？
    prevent  阻止默认行为
    status code  状态码
    1XX  目前正常  客户端可以继续发送请求或忽略这个响应
        101  Switching Protocol
        HTTP  升级为websocket 是使用
    2XX   
        204   没有返回
        205   服务器成功处理了请求，且没有返回任何内容。刷新视图  应用场景： 表单不要多次提交
            但是与204响应不同，返回此状态码的响应要求请求者重置文档视图。该响应主要是被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入。
        206   服务器已经成功处理了部分 GET 请求。  HTTP 分块下载和断点续传
    3XX   
        301   永久跳转     域名废弃了，老用户从老域名出来
        302   临时跳转
        304   Not Modified
    4XX   客户端错误
        401 
        403   请求被拒绝
        404
        405   Method Not Allowed
        408   Request Timeout
        409   多个请求冲突
        413   请求体数据过大
        414   请求里URL 太长
        429   客户端发送太多的请求
        431   请求头的字段内容太大
    5XX  服务端错误
        501
        502
        503

- js  优化
    - eval  with  都不要用
    eval  可以把任何js 文本运行起来
    特别消耗性能
    有安全问题   XSS攻击
    解决方案？
      - cookie   httpOnly属性    核心的cookie 加上httpOnly  
      - 用户输入，前后端转义   encodeURIComponent
    - 加载的顺序
      css 放 head   尽快看到页面
      script  阻塞？ defer属性  <script src="" defer />
      原因：js 动态的代码  动态操作DOM  要等待下载执行完毕
      下载  放在body 尾部   
      CSS 雪碧图  现在还有必要吗？ 
        优点：只发送一次http请求
        缺点：第一次下载有点慢
        雪碧图  css难写   background-position
      阿里  iconfont  为什么不影响性能？
        cdn缓存    部署cdn 集群
        没有http请求  用webpack 打包成 base64
        如果有请求， http协议更新了 对他的支持
    - js 动画优化   