/**
 * @param {number} x
 * @return {number} 
 */
var reverse = function(x) {
    let symbol = '',temp,result;
    let X = Math.abs(x);
    let arr = X.toString().split("").reverse();  // split() 分割字符串并将其返回存入数组中, reverse() 反转数组
    result = parseInt(arr.join(''));
    if (result > (-Math.pow(2,31)) && result < (Math.pow(2,31) - 1)) {
        if (x < 0) {
            symbol = '-';
            result = parseInt(symbol + arr.join('')); // join() 把数组中的所有元素放到一个字符串中，可传入参数，指定要使用的分隔符，如果省略该参数，默认逗号分隔
            return result;
        }
        return result;
    } else {
        return 0;
    }
    
};

console.log(reverse(-123));