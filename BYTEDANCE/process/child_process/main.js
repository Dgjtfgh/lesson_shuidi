// - web worker 计算hash   就是新创建线程
const http = require('http');
const fork = require('child_process').fork; // 创建新的进程
// const sum = longComputation = () => {
//     let sum = 0;
//     for(let i = 0; i < 1e10; i++) {
//         sum += i;
//     }
//     return sum;
// }
http.createServer((req, res) => {
    const compute = fork('./fork_compute.js');
    compute.send('开启一个新的进程吧');
    compute.on('message', sum => {
        res.end(`sum  ${sum}`);
    })
    // const sum = longComputation();
}).listen(1315, () => {
    console.log(process.pid);
});