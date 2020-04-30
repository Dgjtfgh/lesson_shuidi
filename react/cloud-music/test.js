const { Map, fromJS } = require('immutable');
// immutable 不可变数据流管理

// js  深拷贝  浅拷贝
// 对象的修改    引用式赋值
// immutable  全新对象  浅拷贝
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50);  // es6 map
// 生成新的一份， react 思想  状态也是组件的一部分，之前的reducer oldState 不应该被改变
// newState
console.log(map1, map2);