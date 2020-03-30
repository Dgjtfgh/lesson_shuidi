中间件

node   POST   /posts {title, body}  文章
RESTFUL  新增文章
登录
未登录      直接访问    /posts  ->  /login


路由守卫  vue router   beforeEarch  前端 
axios  拦截所有请求  http请求拦截
http 请求头  304 跳转  /login  后端路由系统


- node 的框架 以中间件(函数) 来构建web服务  为用户访问提供服务 是node开发的核心
- 好多个的， 有访问顺序
    洋葱一样  一层层的    提前退出
    每一个用户访问  req  http://localhost:3000
    很多层   去提供中间件的状态服务
    用中间件去服务 res

- 中间件的洋葱模型
    栈的数据结构   简单的数组

- 中间件你是怎么用的，觉得对他深入理解了
    比如发文章前，check 是否登录，不用写到posts 中间件中
    而是独立的放到 auth 健全中间件函数中 单独编写，
    分离到middleeares 目录
    node 架构中就多了一个middlewares层