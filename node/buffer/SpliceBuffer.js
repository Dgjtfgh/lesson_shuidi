var fs = require('fs'); 
// var rs = fs.createReadStream('./test.md', { highWaterMark: 11});
// rs.setEncoding('utf8');
// var data = 'Buffer读书笔记：\n'; 
// rs.on("data", function (chunk){ 
//  data += chunk;   // 隐藏了toString()操作
//  // 相当于  data = data.toString() + chunk.toString();
// }); 
// rs.on("end", function () { 
//  console.log(data); 
// });
var iconv = require('iconv-lite');
Buffer.concat = function (list, length) {
    if (!Array.isArray(list)) {
        throw new Error('Usage: Buffer.concat(list, [length])');
    }
    if (list.length === 0) {
        return new Buffer(0);
    } else if (list.length === 1) {
        return list[0];
    }
    if (typeof length !== 'number') {
        length = 0;
        for (var i = 0; i < list.length; i++) {
            var buf = list[i];
            length += buf.length;
        }
    }
    var buffer = new Buffer(length);
    var pos = 0;
    for (var i = 0; i < list.length; i++) {
        var buf = list[i];
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
var res = fs.createReadStream('./test.md', { highWaterMark: 11});
var chunks = [];
var size = 0;
var data = '';
res.on('data', function (chunk) {
    console.log(chunk);
    chunks.push(chunk);
    size += chunk.length;
});
res.on('end', function () {
    var buf = Buffer.concat(chunks, size);
    var str = iconv.decode(buf, 'utf8');
    console.log(str);
});