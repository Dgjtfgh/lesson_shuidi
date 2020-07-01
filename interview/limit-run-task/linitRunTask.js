function createTask(t) {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(t);
        }, t)
    })
}
function limitTask(tasks, limit) {
    return new Promise((resolve, reject) => {
        let total = 0, // 记录已经完成的任务总数
            i = 0, 
            running = 0;  // 正在运行的任务数
        let res = [];
        function run() {
            if (total >= tasks.length) {
                resolve(res);
            }
            if (running >= limit || i >= tasks.length) return;
            let task = tasks[i]();
            let currenti = i;
            task.then((r) => {
                running--;
                res[currenti] = r;
                total++;
                run();
            })
            running++;
            i++;
            run();
        }
        run();
    })
}
// 1s 定时器 2s 同时启动  之后插入了   3s 任务
console.time('task')
limitTask([createTask(1000), createTask(2000), createTask(3000)], 2)
.then((res) => {
  // 应该花费 
  console.timeEnd('task');
  console.log(res)
})
