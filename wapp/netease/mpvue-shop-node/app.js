const Koa = require('koa');
var bodyParser = require('koa-bodyparser');

const config = require('./config');
const router = require('./routes');

const app = new Koa();
// 解析请求体
app.use(bodyParser());

app.use(router.routes());

app.listen(config.port, () => {
    console.log(`server is started at port ${ config.port }`);
})