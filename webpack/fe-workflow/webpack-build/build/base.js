const { findSync } = require('../lib');
const Config = require('webpack-chain');  // 配置
const config = new Config();  // 配置实例
const path = require('path');
const resolve = (src) => {
    return path.join(process.cwd(), src);
}
const files = findSync('config');
// console.log(files);
module.exports = () => {
    // console.log('在这里做基本配置');
    // files 都  webpack   config化
    const map = new Map();  // es6 Map  key 不限类型  区别与json
    // 重新组织file
    files.map(file => {
        const name = file.split('/').pop().replace('.js', '');
        console.log(name, '--')
        console.log(require(file).toString())
        return map.set(name, require(file)(config, resolve));
    })
    // console.log(map, 'map---')
    // webpack modules
    map.forEach(v => v())
    
    return config;
}