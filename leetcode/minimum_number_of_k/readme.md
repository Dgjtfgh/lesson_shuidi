# LeetCode算法之最小的k个数   面试题40
https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

- 想法很简单   数组排好序 取前k个
    sort()  排序   
    splice(0, k) 复制前k个输出

    遇到问题：
        arr.sort()  直接调用 是字符串排序机制
        arr.sort(function (a, b) {return a - b;}) 回调 数字排序
