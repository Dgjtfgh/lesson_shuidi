# LeetCode算法之和为K的子数组 #560

给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
链接：https://leetcode-cn.com/problems/subarray-sum-equals-k/

解题思路：
- 枚举
    两重循环  计算每个元素开始的子数组和 
    等于K  则 res += 1
    最后返回 res

- Map 以(前n项和)sum为key  出现次数为value  存放
    存在 sum === k res += 1
    Map 存在 sum-k res += Map[sum-k]  即和为sum的前 n 项 除去 和为sum-k的前 m 项 的子数组和为K
