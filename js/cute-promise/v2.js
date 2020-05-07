function CutePromise(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCbs = [];
    this.onRejectedCbs = [];
    // 怎么调用
    // resolve -> fulfilled
    // reject -> rejected
    let self = this;
    function resolve(value) {
        self.status = 'fulfilled';
        self.value = value;
        // console.log('val', value);
        // 让 then onFulfiled 回调调用
        for (let fn of self.onFulfilledCbs) fn(value);
    }
    function reject(reason) {
        self.status = 'rejected';
        self.reason = reason;
        // 让 then onRejected 回调调用
        for (let fn of self.onRejectedCbs) fn(reason);
    }
    executor(resolve, reject);
}
CutePromise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    if (self.status === 'fulfilled') {
        onFulfilled(self.value);
    } else if (self.status === 'rejected') {
        onRejected(self.reason);
    }
    // onFuifilled  onRejected  先等待 resolve() reject()
    self.onFulfilledCbs.push(onFulfilled);
    self.onRejectedCbs.push(onRejected);
}

new CutePromise((resolve, reject) => {
    // console.log(resolve, reject);
    // resolve(123);  // 成功时候的值 通过resolve传
    setTimeout(() => {
        resolve(456);
    }, 2000)
})
    .then((val) => {
        console.log(val);
    })
