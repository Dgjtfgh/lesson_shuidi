// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const postRouter = require('./routers/posts.js');
const signinRouter = require('./routers/signin.js');
const app = new Koa();
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');
app.listen(config.port);
// ? use 应答模式 矿泉水 中间件是处理应用申请的核心 
// 启用路由中间件 
app.use(
    views(
        path.join(__dirname, './views'), {
            extension: 'ejs'    // 扩展名为ejs
}));
app.use(postRouter.routes());
app.use(signinRouter.routes());
console.log(`listening on port ${config.port}`);