# LeetCode算法之乘积最大子数组 #152

给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

链接: https://leetcode-cn.com/problems/maximum-product-subarray/

解题思路：
- 枚举  
    计算所有子数组的 乘积
    取最大值

- 动态规划
    遍历数组
        max 存放到当前位置乘积最大值      
        min 存放到当前位置乘积最小值    如果 下一个为很小的负数 乘积可能会成为最大值   
    核心算法：
```js
    min = Math.min(nums[i], Math.min((max * nums[i]), (min * nums[i])));
    max = Math.max(nums[i], Math.max((max * nums[i]), (temp * nums[i])));
    res = Math.max(res, max);
```
