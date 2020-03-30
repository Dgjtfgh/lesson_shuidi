# LeetCode算法之圆圈中最后剩下的数字 #面试题62
https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

- 数组存储 arr[] 0~n
    循环到则利用 splice(sub, 1) 从数组移除
    最后返回 arr[0]

时间开销过大

- 优化  约瑟夫环问题 数学解法
    删除第一个(m%n)元素后长度为 n-1   fn(n-1, m) fn(n-2, m) ... ans = fn(1, m)为最终留下的数字
    反推 得 (当前index + m) % 上一轮剩余数字的个数
    ans = fn(n-1, m)   fn(n, m) = (m + ans) % n