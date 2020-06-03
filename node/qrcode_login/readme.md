PC端扫码登陆方案，并需要传递哪些信息

1. jwt(cookie session)  轮询怎么做    二维码   扫码登录
URL  浏览器  发生了什么
2. node   前端   登录   api 的业务分开理解


二维码
1. 一段信息的图片   node qrcode 生成
2. 手机扫码登录
    (1) 二维码里 mongodb 存了 qrcode_id  生成时间  过期时间
    (2) 手机扫码时 触发一个ajax post 请求， 到服务端， token  qrcode_id   解析出来用户的user_id
    (3) user信息  token 传给PC页面  
    - 扫一下 App里的  用户头像 id 登录状态  都传到了 PC端


实现
1. node 插入一条qrcode 记录， {qrcode_id, expires_at, create_at}  生成二维码图片
2. PC端的登录页面，二维码  显示出来
3. 扫码  得到 qrcodeId  使用 postmon 来模拟
