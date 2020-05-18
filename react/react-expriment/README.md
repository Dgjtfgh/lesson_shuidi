## 渲染进程
- js
- UI 渲染
互斥的  JS执行  UI 渲染停下

问题：js 执行太长了

react: fiber,  requestIdleCallback

暂停，中止或重新启动
时间分片

react
- 交互(事件)
- js
- 内部 setState
- dom diff

任务优先级排比

以前：js 霸道  想执行多久就多久   如：test.html
现在：Cooperative Scheduling(协同调度)   js和浏览器站在用户角度，互相合作