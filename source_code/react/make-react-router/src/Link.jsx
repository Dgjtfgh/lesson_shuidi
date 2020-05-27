import React from "react";
import Context from "./Context";
const { Consumer } = Context;

class Link extends React.Component {
    // handleClick = (e) => {
    //     // a 默认跳转
    //     e.preventDefault(); // 阻止默认事件
    //     // 组件 切换出来
    //     // 组件能不能出来  靠什么控制
    //     // pathname 匹配   在哪？  provider
    //     // pathname 发生变化   更新？ 

    // }
    render() {
        return (
            <Consumer>
                {({ handlePathNameChange }) => {
                    return (
                        <a onClick={(e) => {
                            e.preventDefault(); // 阻止默认事件
                            window.history.pushState({}, '', this.props.to);
                            handlePathNameChange(this.props.to)
                        }}>
                            {this.props.children}
                        </a>
                    )
                }}

            </Consumer>
        )
    }
}

export default Link;