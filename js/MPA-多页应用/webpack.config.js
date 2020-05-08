const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        promotion: './src/promotion/index.js',
        pay: './src/pay/index.js'
    },
    optimization: {  // 切割公共依赖
        // 不同的规则  不同的抽离方法
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,   // 最小引入次数
                    minSize: 0
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        // new 一次
        new HtmlWebpackPlugin({
            template: './src/pay/index.html',
            filename: 'pay.html',
            chunks: ['pay']  // 当前 html 引入的 js 文件 有哪些
        }),
        new HtmlWebpackPlugin({
            template: './src/promotion/index.html',
            filename: 'promotion.html',
            chunks: ['promotion']
        })
    ]
}