var s1 = 'get-element-by-id';

// 编写一个函数  getElementById
var f = function(s) {
    return s.replace(/-\w/g,function(x) {
        // return x.charAt(1).toUpperCase();
        return x.slice(1).toUpperCase();
    })
}

console.log(f(s1));