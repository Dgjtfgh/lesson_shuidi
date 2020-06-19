// 方法 1
// var arr = [1, [2, [3, 4]]];
// function flatten(arr) {
//     var result = [];
//     for (var i = 0, len = arr.length; i < len; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]))
//         }
//         else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(flatten(arr))

// 方法2
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
function flatten(arr) {
    return Array.from(new Set(arr.toString().split(',').map(function(item){
        return +item   // string 转 number
    }))).sort((a, b) => a - b) 
}
console.log(flatten(arr))

// 方法3
// var arr = [1, [2, [3, 4]]];
// function flatten(arr) {
//     return arr.reduce(function(prev, next){
//         return prev.concat(Array.isArray(next) ? flatten(next) : next)
//     }, [])
// }
// console.log(flatten(arr))

// 方法4
// var arr = [1, [2, [3, 4]]];
// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }
// console.log(flatten(arr))

// let arr = ['1', '2', '3']
// arr = arr.map(parseInt)
// console.log(arr)