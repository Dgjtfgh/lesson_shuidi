var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function (req, res) {
    // res.send('hello world');
    let json = {
        name: 'lihao',
        age: 18
    }
    res.end(`callback(${JSON.stringify(json)})`);
});
app.get('/abc.js', (req, res) => {
    const fs = require('fs');
    const content = fs.readFileSync('./abc.js', 'utf8');
    res.setHeader('Cache-Control', 'max-age=10');
    res.setHeader('etag', 'abcdefg'); // etag 会用MD5之类的哈希算法生成（哈希 etag值）
    if(req.headers['if-none-match'] && req.headers['if-none-match'] === 'abcdefg') {
        res.status(304).end('');
        return;
    }
    res.end(content);
})
app.listen(9090, () => {
    console.log('9090')
})