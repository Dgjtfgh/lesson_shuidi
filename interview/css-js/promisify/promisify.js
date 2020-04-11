const fs = require('fs');
// const util = require('util');

// fs.readFile('../readme.md', { encoding: 'utf8'}, (err, file) => {
//     console.log(file);
// })

fs.opendir('../reduce_map', { encoding: 'utf8'}, (err, dir) => {
        console.log(dir);
    })

// const fsReadFile = util.promisify(fs.readFile);
const fsReadFile = mypromisify(fs.readFile);
// promisify  最后一个参数是回调的函数  封装成 promise
fsReadFile('../readme.md', { encoding: 'utf8'})
    .then(info => {
        console.log(info);
    })


// 写一个promisify 
function mypromisify(func) {
    // 接收一个函数 返回一个函数
    return (...args) => {
        return new Promise((resolve, reject) => {
            func(...args, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }
}