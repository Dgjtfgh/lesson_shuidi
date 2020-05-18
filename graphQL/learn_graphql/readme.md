# graphQL
GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 
GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余。
- vue + graphQL/    

- 看下这个url 大的合适的科学吗   查看posyts  /posts/show/1
    RESTFUL
    不科学
    因为 RESTFUL 它是后端暴露资源的解决方式
URL 设计之美
  1. HTTP 动词 

  2. 每个URL 代表一种资源
  3. 客户端通过http动词，对服务器资源进行操作，实现表现层状态转化

设计URL 网上汇款， 从账户1向账户2汇款520元，URL？
资源是什么？ 发生了什么样的改变？

/ account/1/transfers/500/2   
/transaction  交易 -》 website 独立的模块  HTTP1.1
POST  状态转化  from=1&to=2&amout=500.00   req  body

- 近几年来，RESTFUL 被前端新的理念革命了， GraphlQL， 让前端更好的使用及定义数据接口，   swagger API文档，  Apollo  不浪费数据 数据格式更加严谨

restful  谓语动词  受后端的控制大
vuex -> GrapQL(api) -> mockjs -> server  RESTFUL
GraphQL 让前端数据接口拥有了更大的话语权。

