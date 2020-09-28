const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base.conf");

const webpackNodeExternals = require("webpack-node-externals");

const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");

module.exports = merge(base, {
    target: "node",
    entry: "./src/entry-server.js",
    devtool: "source-map",
    output: {
        filename: 'server-bundle.js',
        libraryTarget: "commonjs2"
    },
    externals: [
        webpackNodeExternals()
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.ent.VUE_ENV': '"server"'
        }),
        new vueSSRServerPlugin()
    ]
})