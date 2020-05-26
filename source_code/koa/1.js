let o1 = {a: 'hello'}
let o2 = Object.create(o1); // koa 源码中， 哪个对象会使用这个呢？

o2.b = 'world';

console.log('o1:', o1.b); // undefine
console.log('o2:', o2.a); // hello
console.log(o2.__proto__) // {a: 'hello'}

// ctx = req + res   Object.assign
//     koa 源码中怎么去造 ctx 这个对象
//     compose

const Koa = require('koa');  // class Koa  EventEmitte
const app = new Koa();

app.use((ctx, next) => {   // fn  ctx  next
    ctx.body = 'hello body';  // res.end()
})

app.listen(3000);  // createServer callback