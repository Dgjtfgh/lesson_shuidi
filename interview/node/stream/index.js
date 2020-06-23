const zlib = require('zlib');
const fs = require('fs');
// 文件比较大的时候
// console.log(process.argv, '------');
const file = process.argv[2];  
// // 压缩文件  过程
// // io -> 内存 -> 处理 -> 压缩 -> 写回 硬盘
// fs.readFile(file, (err, buffer) => {
//     // 文件全读取完成  内存可能会不够   buffer 1G 
//     // console.log(buffer);  // 文件IO
//     zlib.gzip(buffer, (err, buffer) => {
//         // 文件全压缩完成
//         fs.writeFile(file + '.gz', buffer, err => {
//             console.log('File successfully compressed');
//         })
//     })
// });

// stream   libuv    事件模型  eventEmitter
fs
    .createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => console.log('file successfully compressed'))
