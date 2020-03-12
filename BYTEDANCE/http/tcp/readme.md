# TCP协议
学习掘金文章：https://juejin.im/post/5e527c58e51d4526c654bf41
1. TCP 和 UDP 的区别
    共同点：位于传输层（两种协议，应用场景，传输内容）
    应用层(HTTP) -> 表示层(解码和编码...) -> 会话层(session) -> 传输层(TCP) -> 网络层(IP) -> 数据链路层(mac地址) -> 物理层  OSI七层(Open System Interconnecyion) 
    Web   TCP/IP
    TCP(Transmission Control System)

    客户端  Client  浏览器   domain/index.html   10kb   html   src  并发http请求
    服务器  Server
    HTTP协议  domain  ->  服务器ip  建立连接  req 
    res -> Client
    10KB   转化成字节流  排序 不能少传
    TCP 建立连接  

    - TCP是一个面向连接的，可靠的(顺序，可控的)，基于字节流的传输层协议

    - UDP(User Datagram Protocol) 面向无连接的传输层协议   不太多，  网络直播  电影  传速度为主要要求   数据的到达 完整性并不要求高 