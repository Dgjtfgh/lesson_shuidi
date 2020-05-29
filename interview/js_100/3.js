// parseInt  callback   map  item, index, arr数组本身
// parseInt('1', 0)   第二个参数为 要转换的进制数 0 默认十进制
// parseInt('2', 1)   一进制
// parseInt('3', 2)   二进制
console.log(["1", "2", "3"].map(parseInt)); // 1 NaN NaN
console.log(["1", "2", "1"].map(parseInt)); // 1 NaN 1

// parseInt 多传了一个参
console.log(["1", "2", "3"].map(item => parseInt(item))); // 1 2 3

// 如何确保函数在运行时，只接受一个参数  控制函数参数数量的能力

let unarry = fn => val => fn(val);
let parse = unarry(parseInt);
console.log(["1", "2", "3"].map(parse));