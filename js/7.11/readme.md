1. 既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化,为什么还需要虚拟 DOM diff 呢
2. Number 范围
    数字长度不能超出 2^32 - 1
3. 实现 lodash 的_.get
4. Promise.all中任何一个Promise出现错误的时候都会执行reject，导致其它正常返回的数据也无法使用。你有什么解决办法么
    1. allSetlled
    1. promise 定义的时候，都采取 resolve 形式，自己在 then 回调里面判断结果可以与否
5. xss
- 解决方法：
1. 编码过滤
2. CSP
3. 因为 xss 可能可以获取我们的cookie 所以可以设置重要的cookie 让 httpOnly 为 true
