const webSocket = require('ws');
const events = require('events');
const code2ws = new Map()  // 维护连接关系

const wss = new webSocket.Server({
    port: 8010
})
// console.log(wss instanceof events.EventEmitter);
wss.on('connection', function(ws, requenst) {
    // ws 每一个用户
    // console.log(ws);
    let code = Math.floor(Math.random()*(999999-100000)) + 100000;
    code2ws.set(code, ws);
    ws.on('message', function incoming(message) {
        // console.log('incoming', message);
        ws.sendData = (event, data) => {
            ws.send(JSON.stringify({event, data}));
        }
        // {"event":"login"}
        let parseMessage = {};
        // 下面代码有什么风险？  用户输入不是json格式
        // node 易出错  单线程  crash pm2
        try {
            parseMessage = JSON.parse(message);
        } catch(e) {
            ws.sendError('message invalid'); 
            console.log('parse message error');
        }
        let { event, data } = parseMessage;
        if (event === 'login') {
            ws.sendData('logined', {code});
        } else if (event === 'control') {
            let remote = data.remote;
            console.log(remote);
            if (code2ws.has(remote)) {
                ws.sendData('controlled', { remote });
                ws.sendRemote = code2ws.get(remote).sendData;
                console.log(ws.sendRemote);
                ws.sendRemote('be-controlled', {
                    remote: code
                })
            }
        }
    })
})