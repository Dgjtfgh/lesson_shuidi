- 回调函数 (callback)

缺点： 回调地狱，不能用 try catch 捕获错误，不能 return
回调地狱的根本问题在于：
  1. 缺乏顺序性： 回调地狱导致的调试困难，和大脑的思维方式不符
  2. 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身，即（控制反转）
  3. 嵌套函数过多的多话，很难处理错误

优点：解决了同步的问题（只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。）

- Promise
    Promise实现了链式调用，也就是说每次 then 后返回的都是一个全新 Promise，如果我们在 then 中 return ，return 的结果会被 Promise.resolve() 包装
优点：解决了回调地狱的问题
缺点：无法取消 Promise，错误需要通过回调函数来捕获

- Generator
特点：可以控制函数的执行速度


- Async/await
优点：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题
缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。