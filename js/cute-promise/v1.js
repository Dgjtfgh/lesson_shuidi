function CutePromise(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    // 怎么调用
    // resolve -> fulfilled
    // reject -> rejected
    let self = this;
    function resolve(value) {
        self.status = 'fulfilled';
        self.value = value;
        console.log('val', value);
    }
    function reject(reason) {
        self.status = 'rejected';
        self.reason = reason;
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
}

new CutePromise((resolve, reject) => {
    // console.log(resolve, reject);
    resolve(123);  // 成功时候的值 通过resolve传
    setTimeout(() => {
        resolve(456);
    }, 2000)
})
    .then((val) => {
        console.log(val);
    })

// 存在问题：延迟加载时 then() 比 resolve 先执行