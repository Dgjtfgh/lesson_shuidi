const Router = require('koa-router');
const router = new Router({
    prefix: '/posts'
})
const auth = require('../middlewares/auth.js')
// let isLogged = true;
// const auth = (ctx, next) => {
//     if (!isLogged) {
//         ctx.redirect('/login');
//     } else {
//         next();
//     }
// }
router.get('/', async (ctx) => {
    ctx.body = '文章列表'
})

// check一下有没有登录
// 
router.post('/', auth, async (ctx) => {
    // ctx.body = '登录了吗？'
    // ctx.redirect('/login');
    ctx.body = '保存一下'
})

module.exports = router