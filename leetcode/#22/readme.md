# LeetCode算法之括号生成 #22
https://leetcode-cn.com/problems/generate-parentheses/

- 有效括号生成
    两种情况  '(' 和 ')'
    第一个必为 '('
    递归实现  前面字符串 + 两种情况
    退出条件  字符串长度 === 2*n