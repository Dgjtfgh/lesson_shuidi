
// let a = []
// a.push(1)
// call / apply
// bind: 返回一个函数
// this
// function isType(type, data) {
//     type = `[object ${type}]`;
//     return Object.prototype.toString.call(data) === type;
// }
// // [object Array]
// // [object Object]
// // [object Number]
// let b = [], c = []
// console.log(isType('Array', a))
// console.log(isType('Array', b))
// console.log(isType('Array', c))
// console.log(isType('Object', a))
// // 柯里化 curry
// const isArrayType = isType.bind(null, 'Array');
// const isObjectType = isType.bind(null, 'Object');
// const isNumberType = isType.bind(null, 'Number');
// console.log(isArrayType(a))
// console.log(isArrayType(b))  // 'Array' b => isType

// 手写 bind
// 简单版本
// Function.prototype.myBind = function (thisObj, ...arg1) {
//     // 1
//     // 谁调用 bind，最终拼好的参数传给谁
//     let fn = this;
//     console.log(fn)
//     function foo(...arg2) {
//         // 2
//         const args = arg1.concat(arg2);
//         // 调用了，考虑 this
//         // fn 调用完了 有 结果返回，
//         return fn.apply(thisObj, args);
//     }
//     return foo;
// }
// function foo(a, b, c) {
//     return this.d + a + b + c;
// }
// // 一次调用
// let obj = { d: 5 }
// let bar = foo.myBind(obj, 1, 2)
// // 二次调用
// let sum = bar(3)  // => 1 2 3 交给 foo
// console.log(sum);

// 完美版
Function.prototype.myBind = function (thisObj, ...arg1) {
    // 1
    // 谁调用 bind，最终拼好的参数传给谁
    // fn/this 上面 其实可能有个 .prototype 的对象
    let fn = this;
    // console.log(fn)
    function foo(...arg2) {
        // 2
        const args = arg1.concat(arg2);
        // 调用了，考虑 this
        // fn 调用完了 有 结果返回，
         // 因为 this 没有绑定到 cat 上面，并没有做优先级的处理
        // 判断 是不是 this 调用？？ .target
        let isNewCall = this instanceof foo;
         // isNewCall ? 实例 : thisObj
        return fn.apply(isNewCall ? this : thisObj, args);
    }
    foo.prototype = fn.prototype;
    return foo;
}
function Animal(name, color) {
    this.name = name;
    this.color = color;
}
Animal.prototype.say = function () {
    return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
// 简单版
// 由一个方法(这个方法上面可能存在 .prototype 的对象) 调用 bind  -> 经过 bind 处理，处理完返回一个方法  ->
// -> 返回一个方法,把原来可能存在的  .prototype 的对象 弄丢了
// Cat 哪里来的？？
// 答：由 myBind 生成的，你调用了 myBind 我给你返回的
// 我给你返回了 innerFunc
// 最终：Cat 哪里来的？？就是 Cat === foo
// 
const cat = new Cat('white');
// new foo()
// foo 没有 prototype
// cat 
if (cat.say() === 'I\'m a white cat' &&
    cat instanceof Cat && cat instanceof Animal) {
    console.log('success');
}