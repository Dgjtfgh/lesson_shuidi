import { template } from 'lodash';

// const compiler = template('<h1><%= title %></h1>'); //设置为模板
// // ajax , RIA 
// const html = compiler({title: 'My Component'})

// document.getElementById('app').innerHTML = html;

// setTimeout(() => {
//   document.getElementById('app').innerHTML = compiler({title: 'New Component'});
// }, 3000)

// 函数式组件
const MyComponent = props => {
  const compiler = MyComponent.cache || (MyComponent.cache = template('<h1><%= title %></h1>')); // 模板可以复用
  return compiler(props);
}

MyComponent.cache = null;

document.getElementById('app').innerHTML = MyComponent({title: 'MyComponent'});

setTimeout(() => {
  document.getElementById('app').innerHTML = MyComponent({title: 'New Component'});
}, 3000)


