Vue 的响应原理中Object.defineProperty 有什么缺陷?

- Proxy 代理整个对象   defineProperty 每个属性单独代理
- 在vue 2.0 中, defineProperty 并没有对数组提供完全的数据劫持
    前端性能坑    存在 <n empty items> 时
    push pop 常用的方法支持

1. Object.defineProperty 无法监控到数组下标的变化(Vue 但支持push,  原生支持一部分 不支持新增的)
2. Object.defineProperty 只能劫持对象的属性   Proxy 可以代理(劫持)整个对象, 并返回一个新的对象
3. Proxy 不仅可以代理对象, 还可以代理数组

- vue2.0  数组没有支持下标变化，  push pop