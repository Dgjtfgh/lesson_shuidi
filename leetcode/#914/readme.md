# LeetCode算法之卡牌分组 #914
https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

- map 存下每个整数出现的次数 v
    根据题意可以得出
        每个整数出现的次数 v 存在最大公约数gcd() >= 2  则满足条件 返回 true
        多个数的最大公约数算法     辗转相除法
    1. 循环
    2. 递归