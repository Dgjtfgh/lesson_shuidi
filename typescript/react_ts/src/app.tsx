import * as React from 'react';
import { Header } from './components';
// react 函数式组件
// 类型限制
export const App: React.StatelessComponent<{}> = () => {
    return (
        // js class 关键字
        <div className="container-fluid">
            {/* Hello World!  导航 组件的封装*/}
            <Header />
        </div>
    )
}