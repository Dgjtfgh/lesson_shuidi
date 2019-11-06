// flieSystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
const image = fs.readFileSync("car.jpg").toString("base64");
// console.log(image);
const client = new AipImageClassifyClient('17711760', 'y9rkCEbB4SijVYBod3OADiep', 'Qi7qBWVjRSRIcAGe4D7XVvBgOx7tsICd');
client
   .carDetect(image)
   .then(function (result) {
       console.log(result);
   });
// AipImageClassifyClient
// 回调函数
// 文件在哪？ 磁盘里
// js 文件在哪里运行？ 内存 I/O操作
// fs.readFile('./text.text', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
// });
// console.log('hello node');