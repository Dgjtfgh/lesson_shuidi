let { app, BrowserWindow } = require('electron'); // node 端运行
const handleIPC = require('./ipc');  // ipc 模块化
let win
app.on('ready', () => {
    win = new BrowserWindow({
            width: 600,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        }) // chromium 就启动了 桌面的代表就是窗口
    handleIPC();
    win.loadURL('http://localhost:3000')
})