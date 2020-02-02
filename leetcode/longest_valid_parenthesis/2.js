function longestValidParenthesis(s) {
    var max = 0; // 最大长度
    if (s.length == 0 || s.length == 1) return max;
    var stack = [-1];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') { // 左括号 下标入栈
            stack.push(i);  
        } else {           // 右括号 下标出栈
            stack.pop();
            if (stack.length < 1) {
                stack.push(i);  // 栈顶元素都没了， 那么前面的有效匹配结束了， 后面的开始， 那就要减去当前的下标，所以push当前下标

            }else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }
    return max;
}

console.log(longestValidParenthesis(')(((((()())()()))()(()))('));