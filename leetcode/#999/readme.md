# LeetCode算法之车的可用捕获量 #999
https://leetcode-cn.com/problems/available-captures-for-rook/

- 找到R 的位置    分别向四个方向 查找第一个遇到的非 "." 字符   是 p 则 ans += 1  否则结束

- 有优化下时间
    找到 R 并将其 横纵向的非 "." 字符 保存成两个数组