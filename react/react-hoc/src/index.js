import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <button id="add">add</button>
    <button id="min">min</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let a = 4 + 3 - 2;
let b = 4 + 3 - 2;
let c = 4 + 3 - 2;
// 共同点：求和 求差  封装(抽象)
// 不同点：通过参数传进来
// http://baidu.com?a=1&b=2&c=3  =>  {a: 1, b: 2, c: 3}
function urlParse(url) {
  return {}
}

function operation(a, b, c) {
  return a + b - c;
}
class Url {
  urlParse() {}
  operation() {}
}

// 对数据抽象
// 我们已经把 url 这个数据 抽离出来了， 和 urlParse方法分离了

window.onload = function() {
  const add = document.getElementById('add');
  const min = document.getElementById('min');
  // console.log(add);
  let delay = 2000;
  let prev = Date.now();
  add.onclick = function() {
    let now = Date.now();
    if (now - prev > 2000) {
      console.log('发出请求');
      prev = now;
    }
  }
  
  min.onclick = throttle(function() {
      console.log('send req');
  }, 2000);
  // 两个按钮都要节流   怎么封装？
  // lodash：throttle(func, wait)
  /**
   * 封装思路
   * 相同的：1 2 3 4，封装在自己内部
   * 不同的：干的事不一样（function）, 传给我一个函数
   * 函数是一等公民：函数和其他变量(number,string)有同等的地位，
   * 他们都可以当做函数的参数传递，也可以当做函数的返回值返回
   */
  // 高阶函数：high order function （HOF）
  // react => 高阶组件：high order component (HOC)
  function throttle(func, wait) {
    let time1 = Date.now();
    // 我怎么知道 啥时候触发，别人都把他要干的事 传给你了，当然有你决定啥时候触发
    return function() {
      // 里面这层函数，就是 我们返回给 onClick 的，所以 onCLick 执行的也是 里面这层函数
      let time2 = Date.now();
      if (time2 - time1 > wait) {
        func();
        time1 = time2;
      }
    }
  }
}