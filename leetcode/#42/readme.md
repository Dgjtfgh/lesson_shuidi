# LeetCode算法之接雨水 #42
https://leetcode-cn.com/problems/trapping-rain-water/

- 动态规划
    leftArr[]  rightArr[]  两数组存放左右两侧最大高度的值
    接水量 = 两数组和 - 去整体取最大高度的值 - height数组和  