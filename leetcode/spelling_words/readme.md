# LeetCode算法之拼写单词  #1160
https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/

- 想到了  正则匹配
    匹配到了的用 replace(cahrs, ''); 替换
    两重循环

    遇到的问题
        没注意原字符串的变化

- 优化  学习到了用  map  记录每个字符的数量    比较数量