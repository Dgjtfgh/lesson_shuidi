# LeetCode算法之Pow(x,n) #50

实现 pow(x, n) ，即计算 x 的 n 次幂函数。
链接：https://leetcode-cn.com/problems/powx-n/

解题思路：
- 递归
    分治思想：n 递归分化到 1
    如果 n 是 0， 返回 1。
    如果 n 是正数 且 奇数，那么结果需要单独乘以 x
    如果 n 是正数 且 偶数，求(x^2)^(n/2)，一直递归下去即可。
    如果 n 是负数，那么相当于求 (1/x)^(-n)