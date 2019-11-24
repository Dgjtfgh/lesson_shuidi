/**
 * @param {number} x
 * @return {number} 
 */
var reverse = function(x) {
    let arr = x.toString().split("");  // split() 分割字符串并将其返回存入数组中
    let symbol = '',temp,result;
    if (arr[0] === '-') {
         symbol = arr.shift(); // shift() 移除数组中第一个元素并返回
    }
    let len = arr.length;
    for(let i = 0; i < len / 2; i++){
        temp = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    result = parseInt(symbol + arr.join('')); // join() 把数组中的所有元素放到一个字符串中，可传入参数，指定要使用的分隔符，如果省略该参数，默认逗号分隔
    if (result > (-Math.pow(2,31)) && result < (Math.pow(2,31) - 1)) {
        return result;
    } else {
        return 0;
    }
    
};

console.log(reverse(-425));