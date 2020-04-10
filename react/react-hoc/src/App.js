import React from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * A: 获取当前鼠标位置信息
 * 
 * B: 获取当前鼠标位置信息
 */
class A extends React.Component {
  // state = {
  //   x: 0,
  //   y: 0,
  // }
  // componentDidMount() {
  //   document.body.addEventListener('mousemove', (e) => {
  //     // console.log(e.clientX, e.clientY);
  //     this.setState({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   })
  // }
  render() {
    // const {x, y} = this.state;
    const {x, y} = this.props;
    return (
      <div>
        x: { x } - y: { y }
      </div>
    )
  }
}
class B extends React.Component {
  render() {
    const {x, y} = this.props;
    return (
      <div>
        <h3>x: {x}</h3>
        <h3>y: {y}</h3>
      </div>
    )
  }
}
// 高阶组件：组件内部公共代码抽离出来
// 其实是一个方法
function WithMouseInfo(Com) {
  class MouseXY extends React.Component {
    // 公共的代码
    state = {
      x: 0,
      y: 0,
    }
    componentDidMount() {
      document.body.addEventListener('mousemove', (e) => {
        // console.log(e.clientX, e.clientY);
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    // 该渲染什么？
    // Com 传进来的不同的部分
    render() {
      const {x, y} = this.state;
      return (
        <Com x={x} y={y}/>
      )
    }
  }
  return MouseXY;
}
const AXY = WithMouseInfo(A);
const BXY = WithMouseInfo(B);
function App() {
  return (
    <div>
      <AXY />
      <BXY />
    </div>
  );
}

export default App;
