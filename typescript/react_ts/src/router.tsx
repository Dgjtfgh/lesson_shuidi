// vue 全家桶  react  router
import * as React from 'react';  // 组件
import { Route, HashRouter, Switch } from 'react-router-dom';
// vue-router 对比学习 react-router
// import { About } from './components';
import { App } from './app';
import { Header, About, MembersPage } from './components';
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        // new VueRouter()
        <HashRouter>
            <div className="container-fluid">
                {/* router 数组 */}
                <Route path="/" component={ App }></Route>
                <Switch>
                    {/* 只匹配一个 */}
                    <Route path="/" exact component={ Header }></Route>
                    <Route path="/about" component={ About }></Route>
                    <Route path="/members" component={ MembersPage }></Route>
                </Switch>
                
            </div>
        </HashRouter>
    )
}