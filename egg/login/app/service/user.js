// eslint-disable-next-line strict
const Service = require('egg').Service;
const crypto = require('crypto');
class UserService extends Service {
  async register(user) {
    const { ctx } = this;
    console.log(user, 'service');
    user.password = crypto.createHmac('sha256', 'cxk1728cn')
      .update(user.password)
      .digest('hex');
    ctx.body = {
      // 密码绝对不能存明文的  单向加密
      user,
      msg: '注册成功',
      user_id: 10001,
    };
  }
}
module.exports = UserService;
