// function longestValidParenthesis(s) {
//     var max = 0; // 最大长度
//     // console.log(s.length);
//     if (s.length == 0 || s.length == 1) return max;
//     var stack = [];  // 使用栈来实现匹配   空间复杂度O(n)
//     // 嵌套循环
//     // 每位括号的有效匹配长度  比较一下
//     for (var i = 0; i < s.length; i++) {
//         var tempMax = 0;   //当前括号的有效括号匹配长度  重新开始
//         for (var j = i; j < s.length; j++) {   
//             if(s[j] == '(') {
//                 stack.push('('); // 入栈
//                 tempMax++;
//             } else if (s[j] == ')') {
//                 if (stack.length < 1) {  // 栈空的 无有效括号 结束
//                     max = max<tempMax?tempMax:max;
//                     break;
//                 } else {
//                     stack.pop();  // 出栈
//                     tempMax++;
//                 }
//             }
//         }
//         console.log(tempMax);
//         if (stack.length == 0) {
//             max = max<tempMax?tempMax:max;
//         }
//         stack = [];  // 清空为本次括号的服务
//     }
//     return max;
// }
// longestValidParenthesis('(())((');
// console.log(longestValidParenthesis(')()()('));
// console.log(longestValidParenthesis('((()('));
// console.log(longestValidParenthesis('()(()('));
// console.log(longestValidParenthesis('((((()())()()))()(()))('));

function isValid(s) {
    if (!s || s.length < 1) return true;
    var n = s.length;
    var sum = 0;
    for (let i = 0; i < n; i++) {
        var c = s[i];
        if (c == '(') {
            sum++;
        } else {
            if(sum == 0) {
                return false;
            } else {
                sum--;
            }
        }
    }
    return sum == 0? true : false;
} 

function longestValidParenthesis(s) {
    var max = 0; // 最大长度
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 2; j <= s.length; j+=2) { 
            console.log(s.slice(i, j))  
            if (isValid(s.slice(i, j))) {
                max = max<j-i?j-i:max;
            }
        }
    }
    return max;
}

console.log(longestValidParenthesis('(()'));