// "hello"  string
// 使用 Buffer 来存怎么做？

// string -> 二进制  再发送  Buffer  Stream

// "hello"  express  res.end("hello")  Buffer  是什么样的？
// new Buffer(length, )
// hello   -> ascii 码  ->  二进制处理  ->  Buffer

var array = 'hello'.split('').map(v => {
    return '0x' + v.charCodeAt().toString(16)
})
console.log(array);

const buf = new Buffer(array);
// buf 存的16进制 转成字符串
console.log(buf);
console.log(buf.toString());