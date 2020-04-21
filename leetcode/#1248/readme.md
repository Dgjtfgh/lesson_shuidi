# LeetCode算法之统计[又没子数组] #1248

给你一个整数数组 nums 和一个整数 k。

如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

请返回这个数组中「优美子数组」的数目。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-number-of-nice-subarrays

- 解题思路
    1. 子数组的求法
    2. 本题特点   开始的奇数 nums[i] 到 第i+k个奇数 nums[i+k] 中间的部分要看成 一个必须包括的元素 计算子数组
    用一个数组 arr 保存奇数下标
    得出计算式：
        res = (arr[i]-arr[i-1])*(arr[i+k]-arr[i+k-1])
    由于 i ~ i+k  不一定只有一个  所以循环 arr数组
    
    问题：边界问题
    arr[0] 保存 -1   arr.length 处保存 nums.length 


&运算符 
    可以快速地判断一个整数n的奇偶性
    if(n&1)==1 则n是奇数 else 则n是偶数