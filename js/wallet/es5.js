const UUID = require('uuid');
var Wallet = (function() {
    var id, createTime, balance, balanceLastModifiedTime;
    return function() {
        // 返回新的对象 构造函数的使用
        // 1. 闭包 构造函数可以一直引用私有
        id = UUID.v1().replace(/-/g, '');
        createTime = + new Date();
        balance = 0;
        balanceLastModifiedTime = + new Date();
        // 私有方法
        function checkAmount (amount) {
            if (isNaN(amount)) return false;
            return true;
        }
        return { // 公有的属性方法  public
            getId: function() {
                return id;
            },
            getCreateTime: function() {
                return createTime;
            },
            getBalance: function() {
                return balance;
            },
            getBalanceLastModifiedTime: function() {
                return balanceLastModifiedTime;
            },
            increaseBalance: function(amount) {
                if (!checkAmount(amount) || amount < 0) {
                    throw new error('发生错误');
                }
                balance += amount;
                balanceLastModifiedTime = + new Date();
            },
            decreaseBalance: function(amount) {
                if (amount > balance) {
                    throw new error('余额不足');
                }
                balance -= amount;
                balanceLastModifiedTime = + new Date();
            }
        }
    }
})()

var jayWallet = new Wallet();
console.log(jayWallet.getId());
jayWallet.increaseBalance(200);
jayWallet.decreaseBalance(10);
console.log(jayWallet.getBalance());