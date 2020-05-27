import React from "react";
import Context from "./Context";
const { Provider, Consumer } = Context;
// Provider 生产者： 把 xxx 当作全局变量
// Consumer 消费者： 把 xxx 取下来

// 匹配当前 浏览器url 和当前的
// <Route path="/users"><Users /></Route>
// 
class BrowserRouter extends React.Component {
    // location: window.location  只能在浏览器上拿到
    handlePathNameChange = (pathname) => {
        const history = this.state.history;
        this.setState({
            history: {
                ...history,
                pathname
            }
        })
    }
    state = {
        history: {
            location: window.location,
            pathname: window.location.pathname,
            handlePathNameChange: this.handlePathNameChange
        }
    }
    render() {
        return (
            <Provider value={{ ...this.state.history }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default BrowserRouter;