# LeetCode算法之字符串压缩  面试题 01.06
https://leetcode-cn.com/problems/compress-string-lcci/

- 首先想到使用栈 
    count 计数  每个字符重复的数目
    当前一个元素S[i]不等于后一个元素S[i+1]时 
    S[i]入栈   count入栈   count重置为1
    
- 优化
    想到了字符串直接 + 连接  res = ''
    temp 存放前个字符第一个的下标  i-temp  就是重复的数量