## instanceOf
ES6之前
右边构造的prototype有没有出现在左边这个对象的原型链上面

ES6之后
元编程
instanceof 可以自定义：
symbol.hasInstance


先看 构造函数有没有 @@hasInstance 方法，如果有取 @@hasInstance 方法结果，
如果没有 用默认 instanceof 的行为（右边构造的prototype有没有出现在左边这个对象的原型链上面）



## Symbol 元编程到底可以哪些行为
Symbol.hasInstance
Symbol.iterator
Symbol.asyncIterator
Symbol.match
Symbol.toPrimitive      // ！！重点
//...

## Symbol.toPrimitive
转换成原始值
```js
let obj = {
    a: 1
}
obj > 1  // false
// 类型不一样，类型转换
```


