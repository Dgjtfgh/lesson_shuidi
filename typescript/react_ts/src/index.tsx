// let a:number = 1;  // 类型系统   java 等大型语言的优势
// console.log('惊雷一声', a);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tsx文件 react独有的 jsx语法表达文件
// index -> index.tsx 入口文件里就使用 jsx语法
// import { HelloComponent } from './hello';
import { AppRouter } from './router';
ReactDOM.render( 
    <AppRouter />,
    document.getElementById('root')
)
        