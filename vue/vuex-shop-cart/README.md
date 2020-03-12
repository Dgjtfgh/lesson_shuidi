1. 前端   后端
  全栈  js  node 
2. vuex 
  vue + vue-router + vuex 
  vuex 不是必需品
  大型项目时   vuex   数据流管理
  两部分： 组件开发  、  vuex数据设计 

  - 数据应用接口
    
流  数据流

切页面  +  走接口 数据流
 api -> 页面
 api -> vuex -> 页面
  
# vuex属性
- state   存储基本数据 。（可以想象成Store中声明变量的地方）

- getters     从state基本数据派生出的数据 （在Store仓库里，state就是用来存放数据，若是对数据进行处理输出，比如数据要过滤，一般我们可以写到computed中。但是如果很多组件都使用这个过滤后的数据，比如饼状图组件和曲线图组件，我们是否可以把这个数据抽提出来共享？这就是getters存在的意义。getters可以对state里面的数据进行计算操作，它就是state的计算属性。虽然组件内也可以做计算属性，但是getters可以在多个组件之间复用，如果一个状态只在一个组件内使用，可以不用使用getters。）

- mutations   Store中更改state数据状态的唯一方法。（mutations必须是同步函数）mutations中函数方法会自动接受 state 作为第一个参数，之后参数是actions中调取API得到数据，并回调mutations中方法时根据需求传入的数据。
 
- actions     请求API方法获取后台数据，然后可以回调函数提交mutaions方法更改state数据状态，使之可以异步。(Action通过提交的mutation修改state，而不是直接修改state,Action 可以包含任意异步操作。)

- modules     模块化Vuex（将store分割成不同的模块）