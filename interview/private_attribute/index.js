// js es6  class 关键字 面向对象
const UUID = require('uuid'); // 引入第三方库，

// class Wallet  {
//   // 属性和方法组成
//   constructor() { //构造函数里声明
//     this._id = UUID.v1(); //命名规则约定  _变量 私有
//     // 创建时间 不能改
//     this._createTime = + new Date(); // 类型转换
//     // 余 额 怎么设计？ 
//     this._balance = 0; // 余额 设计成私有的属性 规则 安全

//     // console.log(this.id);
//     // console.log('欢迎使用支付宝钱包');
//     // 设计支付宝用的钱包， 几十亿人都在用的
//     // 19979113182 
//     // 数字货币的概念 比特币， 
//     // 1. 唯一 id， autoincremnet  Node, 绝对不会重复 
//   }
//   getBalance() {
//     return this._balance;
//   }
//   // 能这么写吗？  重置？ 
//   setBalance() {

//   }
//   increaseBalance(increasedAmount) { //
//     console.log('多了' + increasedAmount ) ;
//     this._balance +=  increasedAmount
//   }
//   decreaseBalance(decreasedAmount) {
//     this._balance -=  decreasedAmount
//   }
//   getCreateTime() { //public 
//     return this._createTime;
//   }
//   getId() {
//     return this._id;
//   }
//   setId() {
//     throw new Error('私有属性_id 不可以修改');
//   }
  
// }
var Wallet = (function() {
    var id, createTime, balance; 
    return function() {
        id = UUID.v1();
        createTime = + new Date();
        balance = 0;
        return {
            getBalance() {
                return balance;
            },
            setBalance(money) {
                balance = money;
                createTime = + new Date();
            },
            increaseBalance(increasedAmount) { //
                // console.log('多了' + increasedAmount ) ;
                balance +=  increasedAmount;
                createTime = + new Date();
            },
            decreaseBalance(decreasedAmount) {
                balance -=  decreasedAmount;
                createTime = + new Date();
            },
            getCreateTime() { //public 
                return createTime;
            },
            getId() {
                return id;
            },
            setId() {
                throw new Error('私有属性_id 不可以修改');
            }
        }
    }
})();

const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
console.log(zzwWallet.getBalance());
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance());   // js浮点数相加 存在不精确问题
console.log(zzwWallet.getBalance().toFixed(2));  // toFixed() 把 Number 四舍五入为指定小数位数的数字
console.log(zzwWallet.getCreateTime());
// zzwWallet.id = '12212'; //id 属性只读， 但不能修改
// console.log(zzwWallet.id); 
// console.log(zzwWallet.getId());