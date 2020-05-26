let url = require('url');  // node 内置模块

let request = {
    get url() {  // 不用原生的req 用ctx.request.url
        return this.req.url;
    },
    get path() {
        return url.parse(this.req.url).pathname;
    },
    get query() {
        return url.parse(this.req.url).query;
    }
};
module.exports = request;