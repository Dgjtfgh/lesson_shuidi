// redux mini  什么让项目运行起来
import { Store, createStore } from 'redux';
// es6 array reduce
// redux  向组件提供共享状态  动态性
// 通过reducer函数处理后， oldState 有一个唯一的状态返回
import { state, State } from './reducers'
// vuex 单一状态树
// 泛型
export const store: Store<State> = createStore(
    state
)