## 1
Object.prototype.toString.call(null) 为什么得到 "[object Null]"？

答案：
ECMA 规定 Object.prototype.toString 内部逻辑：
调用 Object.prototype.toString 如果 this 的值 ：
1. 是 null 返回  [object Null]
2. 是 undefined 返回  [object undefined]
3. .....


鉴于 ECMA 的规定，我们的浏览器实现起来的时候也要遵守上述的逻辑，
我们就可以用 Object.prototype.toString 来判断类型

## 2
ajax 是底层的api === XmlHttpRequest
```js
var xhr = new XmlHttpRequest();
xhr.open('GET', '/api/test', true);
xhr.onload = function() {

}
xhr.send();
```
axios 就是对 XmlHttqRequest 封装

## 3
fetch:
xhr:
1. fetch 现代化 api是 Promise 风格的
2. fetch 适用性更强，可以在 service-work 里面使用的
3. 两个区分请求错误的时候，规则不一样：fetch 认为 只要收到状态码就成功（不管是404、500）
   xhr 认为 什么请求才是错误的