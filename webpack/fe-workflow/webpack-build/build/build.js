const rimraf = require('rimraf');
const path = require('path');
const ora = require('ora');    // 加载指示器
const chalk = require('chalk');
// webpack   最基本的  entry output mode
// webpack-chain 编程
// 项目的根目录下
const config = require('./base')();  // 模块化  函数立即运行
// console.log(config);
const webpack = require('webpack');

rimraf.sync(path.join(process.cwd(), 'dist'));
const spinner = ora('开始构建项目...');
spinner.start();
// 进行编译
webpack(config.toConfig(), function(err, stats) {
    spinner.stop();
    if(err) throw err
    process.stdout.write(
        stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n'
    )
    console.log(chalk.cyan('build 完成\n'));
})