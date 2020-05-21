import React from 'react';
import logo from './logo.svg';
import './App.css';
// electron调用 NativeAPI
// Inter-Process Communication  进程间通信
// electron 不支持 import
// create-react-app 0配置启动 reject
import { ipcRenderer } from 'electron'; // 去到IPC

function App() {
    return (
        <div className="App" >
            <h1 > Hello World </h1>
        </div>
    );
}

export default App;