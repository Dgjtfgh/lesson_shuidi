let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    })
})
let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)
})
let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 2000)
})

// let p = Promise.all([p1, p2, p3])
// p.then(x => {
//     console.log(x)
// })

Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        let res = [];
        let sum = 0;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(x => {
                res[i] = x;
                sum++;
                if (sum === promises.length) {
                    resolve(res);
                }
            })
                .catch(err => {
                    reject(err);
                })
        }
    })
}

let P = Promise.myAll([p1, p2, p3])
P.then(x => {
    console.log(x);
})