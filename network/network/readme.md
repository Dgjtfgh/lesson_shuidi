- 请问 web 交互的数据格式是什么？ 
  有没有方法, 在用户请求时, 提供多种数据返回格式选择？
  ajax  json / html
  传统老的浏览器   返回 text/html
  动态web         返回 text/json
  mvc    mvvm  请求头分析
- 计算机网络这块的知识点   历史
    1. 为什么http  createServer  callback  req + res 传输过程表达出来了呢？
    浏览器(n)和服务器(1)之间的通信  HTTP协议
    HTTP协议构建于TCP/IP协议之上的 网络应用程协议
    HTTP/0.9  1991 学术交流， 网络之间传输HTML 超文本内容
    请求响应的模式
    TCP 安全连接管道
    - HTTP 基于 TCP 传输客户端IP地址(dns domain), 端口
        三次握手，建立连接
        dns 递归的查找过程
            浏览器缓存 -> 本地host 文件 -> 运营商 -> ... -> 美国
        三次握手
          双方都有req(发送) res(接收) 的能力  ack syn
          1. browser   syn(seq + j) SYN_sent状态  等待确认同步序列序号  
          2. ack = j + 1   序列序号加一回复   seq = k  发送自己的请求
          3. browser  establised状态  ack = k + 1
        四次挥手  断开连接
          发送完请求后
          1. A -> TCP 发送完毕   B  FIN 报文
          2. B 接收到  不会立即用FIN 报文回复主机A，主机A发送一个确认ACK，同时同知自己相信的应用程序， (防止A 多次发送FIN)
          3. TCP向A发送FINb 报文
          4. A 收到FIN 报文， B  ACK  表示彻底释放了
          请求行   GET  /posts
          0.9 版本中连请求头和请求体都没有   连接a  html 文本

        1.0 版本  正式版
          1994年   支持多文本下载
          text/html 0.9    image/png  text/css  text/js
          accept: text/html
          accept-encoding: gzip
          accept-language: zh_CN
          请求体  POST 
          状态码  202  503
          Cache机制   Last Modify
          userAgent ?  有什么用  判断用户浏览器类型
          在业务中很重要
          - 通过这个标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计。  PC/moblie
          iphone/android  手机网站
          - logs日志处理  阿里下单的   30%iphone用户花了70%的钱
          
    2. 在哪个HTTP版本中支持 png的解析
    3. 雪碧图 http 请求，  合并到一张背景图上， 前端性能优化技术，为什么现在不考了？ 哪个http版本干掉的
    4. userAgent 在哪个版本出现
    5. 哪个版本极大的提升了下载速度