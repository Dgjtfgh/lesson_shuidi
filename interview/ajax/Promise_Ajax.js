function Param(json) {
    var arr = [];
    for (var i in json) {
        arr,
            arr.push(i + "=" + json[i])
    }
    return arr.join("&");
}

function ajax(a) {
    return new Promise(function (resolve, reject) {
        a = a || {};
        a.type = a.type || "get";
        a.data = a.data || "";
        var xhr = null;　　　　　　　　　　// 处理兼容问题
        xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        if (a.type === "get") {
            a.url += "?" + Param(a.data) + "&t=" + new Date().getTime();　　　　　　　//调用open()方法并采用异步方式
            xhr.open("get", a.url, true);　　　　　　　//使用send()方法将请求发送出去
            xhr.send();
        } else if (a.type === "post") {
            xhr.open("post", a.url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(Param(a.data))
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Err:" + xhr.status)
                }
            }
        }
    })
}