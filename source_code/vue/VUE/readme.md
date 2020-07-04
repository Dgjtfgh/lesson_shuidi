## vue 与 模板
1. 编写 页面 模板
    1. 直接在HTML标签中写标签
    2. 使用 template
    3. 使用 单文件 (<template />)
2. 创建 Vue 实例
    在 Vue 的构造函数中提供：data, menthods, computed, watcher, props ...
3. 将 Vue 挂载到页面 (mount)


## 数据驱动模型

- Vue 的执行流程
    1. 获得模板：模板中留下了 "坑" (数据)
    2. 利用vue 构造函数中所提供的数据来填"坑"，得到可以在页面中显示的模板

vue 利用我们提供的数据 和 模板生成了一个新的 HTML ( node 节点)，替换了页面中放置模板的位置。