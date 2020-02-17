const UUID = require('uuid');
class wallet {
    // _id 私有属性的做法 _id 约定
    constructor(){
        this._id = UUID.v1().replace(/-/g, '');
        this._createTime = + new Date();
        this._balance = 0;
        this._balanceLastModifiedTime = + new Date();
    }
    getId() {
        return this._id;
    }
    getCreateTime() {
        return this._createTime;
    }
    getBalance() {
        return this._balance;
    }
    getBalanceLastModifiedTime() {
        return this._balanceLastModifiedTime;
    }
    increaseBalance(IncreaseBalance) {
        if (IncreaseBalance < 0) {
            throw new error();
        }
        this._balance += IncreaseBalance;
    }
    decreaseBalance(DecreaseBalance) {
        if (DecreaseBalance > this._balance) {
            throw new error('余额不足');
        }
        this._balance -= DecreaseBalance;
    }
}

const jayWallet = new wallet();
console.log(jayWallet.getId());
jayWallet.increaseBalance(20);
jayWallet.decreaseBalance(10);
console.log(jayWallet.getBalance());
jayWallet._id = 'aaa';
console.log(jayWallet.getId());
console.log(jayWallet.getBalance(), jayWallet.getBalanceLastModifiedTime());
