// var a = 2; 变量查询 LHS查询
// 试图找到变量的容器本身，从而对其赋值
// RHS查询  简单地查找

function chageObjProperty(o) {
    o.siteUrl = "http://www.baidu.com";
    o = new Object();
    o.siteUrl = "http://www.google.com";
}


let webSite = new Object();
chageObjProperty(webSite);
console.log(webSite.siteUrl);  // http://www.baidu.com