const serverConf = require("./webpack.server.conf");
const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

const Mfs = require("memory-fs");
const axios = require("axios");

module.exports = (cb) => {
    const webpackComplier = webpack(serverConf);
    var mfs = new Mfs();
    webpackComplier.outputFileSystem = mfs;

    webpackComplier.watch({}, async(error, stats) => {
        if (error) {
            return console.log(error);
        }
        stats = stats.toJson();
        // stats.hasErrors.forEach(error => console.log(error));
        // stats.hasWarnings.forEach(warning => console.log(warning));

        let serverBundlePath = path.join(serverConf.output.path, 'vue-ssr-server-bundle.json');
        let serverBundle = JSON.parse(mfs.readFileSync(serverBundlePath, "utf-8"));

        let clientBundle = await axios.get("http://localhost:8082/vue-ssr-client-manifest.json");

        let template = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf-8");
        cb && cb(serverBundle, clientBundle, template);
    })
}