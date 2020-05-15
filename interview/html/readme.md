https://item.jd.com/100006729770.html

- 快速打开页面
    - ssr  服务器端渲染  node   vue template 服务器端渲染 html 输出到客户端
    - ssr多人打开，特别是电商项目，不适合 会炸   实时编译
        template  从前端提前到服务端编译   后端工作压力  SEO
    - 静态化服务   10000679770.html
        GET / 10000679770.html   MVC/SSR   商品详情页  数据库查出数据     node页面模板<%= %> 输出
        一个人访问时， database   template  compile -> res
        之后，把生成的html(png/js/css) 缓存起来， 服务器压力降低了    发布到CDN
        SEO 喜欢纯html网页

    首页静态化，一定需要是的
    1. 用户基本从首页进入   缓解服务器压力   中央服务器(动态内容) + cdn(静态内容)
    2. 静态化    cdn缓存   设置过期时间

- https://item.jd.com/100006729770.html 除了静态化外，这个网页怎么实现动态输出呢？
    编译  替换
    京东的商品详情页， 静态化， 1. 因为SEO  花大量的前做网络推广 2. 服务器优化
    商品的基本详情 + 商品介绍(商家在后台通过 markdown 编辑器)  有静态化的需求
    
    ajax  动态加载
    分屏加载