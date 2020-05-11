const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    // 返回 html
    // 文件读出来
    // 文件内容写入
    const readStream = fs.createReadStream('./index.html');
    readStream.pipe(res);
})
.listen(8080, () => {
    console.log('8080');
})