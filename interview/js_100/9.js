// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b)
// })()


// function b() {
//     alert(0)
// }
// (function b() {
//     console.log(b); // 无限循环,而不是alert(0)
//     b()
// })()

var a = 10;
(function () {
    console.log(a)  // undefined
    a = 5
    console.log(window.a)  // 10
    var a = 20;
    console.log(a)  // 20
})()