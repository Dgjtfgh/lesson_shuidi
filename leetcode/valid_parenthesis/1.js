/**
 * 
 * @param {string} s
 * @return {boolean} 
 */
var isValid = function(s) {
    if (!s || s.length < 1) return true; // 字符串为空
    var n = s.length;  // 字符串长度
    const stack = [];  // 栈 先进后出  数组的尾部插入push() 移除pop() 元素 
    for (var i = 0; i < n; i++) {
        const c = s[i];
        // console.log(c);
        if (c == '(') {
            stack.push(c);
        } else {
            if (stack.length < 1) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length > 0 ? false : true;
}

console.log(isValid('(())'));