## 死循环
useEffect 第二个参数加依赖

## capture value
每次组件 render 的时候 (组件内部处理的函数：事件处理，effects，tomeouts)，都会捕获 当前的 state 或 props
useRef() 解决