

vnode -> diff 算法   优化的关键点

- vue 架构
    h  虚拟节点的生成
    1. 可以良好的表达模板结构   html -> json
        内存  js   json
    2. 抽象能力，便于代码的执行
    3. 虚拟节点  VNode  要有利于 patch diff 算法的优化