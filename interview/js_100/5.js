// 下面的代码中a 在什么情况下会打印1?
// == 会做隐式类型转换
// 1.
// var a = {
//     i: 1,
//     toString() {
//         return a.i++;
//     }
// };  // 简单数据类型是不可能的
// a 是变化的  对象

// 2.
// var a = {
//     num: 0,
// };
// a.valueOf = function() {
//     console.log('valueOf----');
//     return ++a.num;
// }

// 还有别的方法？ es6有哪个概念可以让我们的值来个三段锦
// 3. generator  next
// let a = {
//     gn: (function* () {
//         yield 1;
//         yield 2;
//         yield 3;
//     })(),
//     valueOf() {
//         return this.gn.next().value;
//     }
// }

// 4. defineProperty
Object.defineProperty(window, 'a', {  
    get: function() {
        return this.value += 1;
    }
})

if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}