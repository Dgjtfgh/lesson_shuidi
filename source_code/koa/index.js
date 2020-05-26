const Koa = require('./lib/application');
let app = new Koa();

app.use((ctx) => {
    // res.end('hello world');
    // es6 方法？
    // ctx -> ctx.req -> request -> req
    console.log(ctx.req.url);
    console.log(ctx.request.req.url);
    console.log(ctx.response.req.url);
    console.log(ctx.request.url);
    console.log(ctx.request.path);
    console.log(ctx.url);
    console.log(ctx.path);
    ctx.body = 'hello world';
})

app.listen(3001);