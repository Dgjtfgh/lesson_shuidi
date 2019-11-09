const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'qq', //腾讯
  port: 465,
  secureConnection: true,
  auth: {
    user: '1137807913@qq.com',
    pass: 'uozbgeblvuskgejh'
  }
})

let mailOptions = {
  from: "光棍节前的呐喊<1137807913@qq.com>",
  to: "1105317666@qq.com",
  subject: '双11买什么？',
  html: '<b>淘宝京东拼多多</b>'
}
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message send: %s', info.messageId);
})
// const TULING = require('tuling');

// const aiTuling = new TULING({
//     key: 'cf55a3574c3845719fc56cebbd6b3651'
// });
// // 立即执行函数
// (async () => {
//     // 机器人
//     // console.log('arrow function')
//     const result = await aiTuling.send({
//         userid: 1,
//         info: '今天天气',
//         loc: '南昌市'
//     });
//     console.log(result);
// })()
// console.log(func);
// func();