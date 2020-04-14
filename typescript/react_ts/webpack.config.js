const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist'); // 删除目录 编译之前先删除已有的目录
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {   // 处理静态文件
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    app: './index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    vendorStyles: [  // bootstrap  css框架  业务代码在改变， 框架要被打包但不会被修改  单独打包
      '../node_modules/bootstrap/dist/css/bootstrap.css'
    ],
    // vendor: Object.keys(package.json.dependencies)  // 获取生产环境依赖的库
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
        },
      },
    ],
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    noInfo: true,
  },
  plugins: [
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: "vendor",
  //         chunks: "initial"
  //       }
  //     }
  //   }
  // }
};