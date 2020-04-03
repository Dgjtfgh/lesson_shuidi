const app = {
    // 顺序执行， 栈，  空的
    // 每一项是函数
    middlewares: []
}

// use 每个都是函数, middlewares
app.use = function(fn) {
    if (typeof fn !== 'function') {
        return new Error('中间件一定是函数');
    }
    app.middlewares.push(fn);
}

// ctx = req + res
// 合并
// 中间件最后会合并成一个大函数
app.compose = function() {
    function dispatch(index) {
        if (index === app.middlewares.length) return;
        const fn = app.middlewares[index];
        // 当前中间件
        // console.log(fn);
        fn(function next() {
            dispatch(index+1);
        })
    }
    dispatch(0)
    // 执行第一个
    // 有第一个 决定next
    // yield 异步问题
    // for (let i = 0; i < this.middlewares.length; i++) {
    //     this.middlewares[i]();
    // }
}


module.exports = app;