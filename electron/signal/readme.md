# WebSocket 协议

1. 在2008年诞生
2. 最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
3. 其他特点包括：
    （1）建立在 TCP 协议之上，服务器端的实现比较容易。
    （2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
    （3）数据格式比较轻量，性能开销小，通信高效。
    （4）可以发送文本，也可以发送二进制数据。
    （5）没有同源限制，客户端可以与任意服务器通信。
    （6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

HTTP 单向请求连接  如果服务器有连续的状态变化，客户端要获知就非常麻烦   
轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）

A  B  用户   点对点的连接  websocket
A 管 B
Electron  远程控制系统
A发一个消息给B