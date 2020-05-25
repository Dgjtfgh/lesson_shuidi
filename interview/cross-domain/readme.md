# 跨域

## CORS
响应头：
- Access-Control-Allow-Origin: <origin> | *
- Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header

```js
res.writeHeader(200, {
    'X-foo': 'xxabcdsf',
    'Access-Control-Expose-Headers': 'X-foo'
})
```
- Access-Control-Max-Age: <delta-seconds>
    - 简单请求
    - 非简单请求：
        1. 预检请求(preflight: OPSTIONS)  试探是否允许跨域
        2. 真实的请求
```js
axios({
    url: 'api.com/get',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
    data: {
        name: '123'.
        pwd: '456'
    }
})
```
- Access-Control-Allow-Credentials
    指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容。
    当用在对preflight预检测请求的响应中时，它指定了实际的请求是否可以使用credentials。请注意：简单 GET 请求不会被预检；如果对此类请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。
    - 设置为false, 后端拿不到前端传过来的 cookie
    - 前端: const xhr = new Xmlhttprequest(); xhr.withGredential = true
- Access-Control-Allow-Methods: <method>[, <method>]*
- Access-Control-Allow-Headers: <field-name>[, <field-name>]*

# JSON
1. 流程
2. 封装成 Promise
3. JSONP 后端返回的是什么