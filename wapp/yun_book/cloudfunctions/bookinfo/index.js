const cloud = require('wx-server-sdk') // 云服务器
var rp = require('request-promise');   // npm 向api发送请求
cloud.init();
exports.main = async(event, context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=969f9b1c99a1a332388c226bbf683a5e`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=969f9b1c99a1a332388c226bbf683a5e`).then(html => {
    return html;
  })
  return res;
}