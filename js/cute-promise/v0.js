function test(fn) {
    setTimeout(() => {
        fn('hello world')
    }, 3000)
}

test(function (val) {
    console.log(val)
})
// 3s 输出 hello world
// cb -> promise -> Co(generate) -> async
new Promise((resolve, reject) => {
    resolve(1);
})
    .then((val) => {
        console.log(val);
    })
