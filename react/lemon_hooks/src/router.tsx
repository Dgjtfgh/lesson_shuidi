import * as React from 'react';

import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; // readux vuex 有点不一样 reducer 函数编程
// redux  vuex  将状态中央化  便于管理   共享 跨组件 跨父子关系
import { App } from './app'
import { store } from './store';
import { MembersPageContainer } from './components/members/';
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container-fluid">
                    Router
                    <Route component={App} />
                    <Switch>
                        {/* redux 会带来组件的改变 
                        concat component -> container connect state
                        container + statelesscomponent */}
                        <Route path="/members" component={MembersPageContainer} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}