// nb email 正则表达式
// 754211506@qq.com
// 一定要匹配到 .
console.log(/^[\w-]+@[\w-]+\.[\w-]+$/.test("3423-43243@163.com"));
console.log(/^[\w-]+@[\w-]+\.[\w-]|\.+$/.test("3423-43243@163.com.cn."));
console.log(/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test("3423-43243@163.com.cn"));