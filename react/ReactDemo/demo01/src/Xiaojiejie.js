import React, { Component, Fragment} from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state={
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="Dgjtfgh">增加服务</label>
                    <input id="Dgjtfgh" className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> 
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <XiaojiejieItem 
                                        content={item}
                                        key={index+item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </div>
                            )
                                {/*<li 
                                    onClick={this.deleteItem.bind(this, index)} 
                                    key={index+item}
                                    dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li>*/}   
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        // console.log(e.target.value)
        // console.log(this)
        // this.state.inputValue = e.target.value    // 不可行
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie;