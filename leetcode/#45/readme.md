# LeetCode算法之跳跃游戏 II #45

给定一个非负整数数组，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
你的目标是使用最少的跳跃次数到达数组的最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii

解题思路：
1. 暴力法
    回溯思想 将所有情况枚举 一遍

2. 贪心算法   追求最远距离
farposition  能跳的最远位置
遍历一遍数组  遍历到  farpostion   说明一跳完成
maxposition  后一跳的最远位置   更新farposition

当 farposition >= len - 1   跳跃完成

