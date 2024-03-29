const Koa = require('koa')
const app = new Koa()
const { connect , initSchemas } = require('./database/init.js')
// const mongoose = require('mongoose')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')


app.use(bodyParser())
app.use(cors())
// ;(async () =>{
//     await connect()
//     initSchemas()
//     const User = mongoose.model('User')
//     // let oneUser = new User({userName:'Dgjtfgh',password:'123456'})
//     // oneUser.inster().then(()=>{
//     //     console.log('插入成功')
//     // })
//     let  users = await  User.find({}).exec()
//     console.log('------------------')
//     console.log(users)
//     console.log('------------------')
// })()
let user = require('./appApi/user.js')
let goods = require('./appApi/goods.js')

//装载子路由
let router = new Router()
router.use('/user',user.routes())
router.use('/goods',goods.routes())

// 路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

;(async ()=>{
    await connect()
    initSchemas()
})()

// app.use(async(ctx)=>{
//     ctx.body = '<h1>hello Koa2</h1>'
// })

app.listen(3300,()=>{
    console.log('[Server] starting at port 3000')
})