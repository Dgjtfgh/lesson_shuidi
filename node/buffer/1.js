// var str = "深入浅出node.js";
// var buf = new Buffer(str, 'utf-8');
// console.log(buf); 
// <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73>

var buf = new Buffer(100);
// console.log(buf);
console.log(buf.length); // 100
console.log(buf[10]);    // 0

buf[10] = 100;
console.log(buf[10]);   // 100
buf[20] = -100;
console.log(buf[20]);   // 156
buf[21] = 300;
console.log(buf[21]);   // 44
buf[22] = 3.1415;
console.log(buf[22]);   // 3