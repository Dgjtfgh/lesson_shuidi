const devServer = require("./build/dev-server.js");
const express = require("express");
const app = express();
const vueRender = require("vue-server-renderer");

app.get('*', (request, response) => {
    response.status(200);
    response.setHeader("Content-type", "text/html;charset-utf-8");
    devServer((serverBundle, clientBundle, template) => {
        let render = vueRender.createBundleRenderer(serverBundle, {
            template,
            clientManifest: clientBundle.data,
            runInNewContext: false
        })
        render.renderToString({
            url: request.url
        }).then((html) => {
            response.end(html);
        }).catch(error => {
            response.end(JSON.stringify(error));
        })
    })
})

app.listen(5001, () => {
    console.log('服务已开启');
})