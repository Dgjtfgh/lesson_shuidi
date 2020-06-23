const http = require('http');
// tcp 传输的是二进制
let hello = ''
for (var i = 0; i < 10240; i++) {
    hello += "a"  // 10KB 的字符串? 一次TCP 二进制处理
}

// console.log(`Hello: ${hello.length}`);
hello = Buffer.from(hello); // 性能优化

http.createServer((req, res) => {
    res.writeHead(200);
    res.end(hello);
}).listen(8001);