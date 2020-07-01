let arr = [
    Promise.resolve(1),
    Promise.reject('err'),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(0)
        }, 3000)
    })
]
// all: 所有的 resolve
// race: 以最早发生的 状态变化
// allSettled: 不要求所有的 resolve / reject, 不要求结果, 你尽管运行
Promise.allSettled(arr).then(r => {
    console.log(r, 'all settled');
})