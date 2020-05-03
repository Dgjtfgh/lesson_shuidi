# LeetCode算法之最大子序和 #53

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
链接：https://leetcode-cn.com/problems/maximum-subarray/

解题思路：
max 记录最大和
sum 记录加到当前原始的和
sum < 0 时 前面的可以舍去 sum = 0;  重新开始算和
最后返回 max