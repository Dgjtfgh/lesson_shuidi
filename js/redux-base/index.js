const {
    createStore
} = require('redux');
let a = 123;
let globalState = {
    home: {},
    login: {}
}
// reducer: 纯函数 => state
// state 完全要自己控制
// 参数：state 上一次的 state  action dispatch 那个 action
function reducer(state, action) {
    console.log(action.type);
    if (action.type === 'DELETE_HOME_STATE') {
        return {}
    }
    if (action.type === 'CHANGE_HOME_STATE') {
        return {
            home: action.home
        }
    }
    return {
        home: 'home state',
        login: 'login state'
    }
}
// action : js对象
// type  发起这次 action ？ CRUD
// dispatch => action => reducer => state
let action = {
    type: 'CHANGE_HOME_STATE',
    home: 'home state 1',
    a: 1, b: 2
}
// 生成 state 的默认值
let store = createStore(reducer);
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());

let action1 = {
    type: 'DELETE_HOME_STATE'
}
store.dispatch(action1);
console.log(store.getState());
/**
 * 取值：
 * globalState.home
 * globalState.login
 * 修改：可以轻易的 把全局变量改掉   容易出bug
 * globalState.home = 123456
 * 尽量避免全局变量
 * redux/vuex 都要设计一套流程修改 state: mapGetter() dispatch -> action -> muatation -> state
 * state = {
 * b: 456
 * }
 * return (
 * <div>{{a}}</div>
 * )
 */