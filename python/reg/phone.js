const phoneReg = /^1[35789]\d{9}/; // 匹配规则定义 正则表达式
console.log(phoneReg.test('19979113182,rgg'));
console.log(typeof phoneReg);
console.log(/\d{3}-\d{5,8}/.test('010-123456'));