// import "./app.css";
// console.log('welcome');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { HelloComponent } from './hello';
import { AppRouter } from './router'; // 根组件的概念

ReactDOM.render(
    // react hooks  超越 redux vuex 的新特性  跨组件共享状态
    // defaultUaerName 可以被组件共享状态
    // const [name, setName] = React.useState('defaultUaerName');
    <AppRouter />,
    document.getElementById('root')
)
