# LeetCode算法之编辑距离 #72
https://leetcode-cn.com/problems/edit-distance/

- 动态规划

1. 定义 dp[i][j]
    dp[i][j] 代表 word1 中前 i 个字符，变换到 word2 中前 j 个字符，最短需要操作的次数
    需要考虑 word1 或 word2 一个字母都没有，即全增加/删除的情况，所以预留 dp[0][j] 和 dp[i][0]

2. 状态转移
    增，dp[i][j] = dp[i][j - 1] + 1
    删，dp[i][j] = dp[i - 1][j] + 1
    改，dp[i][j] = dp[i - 1][j - 1] + 1
    按顺序计算，当计算 dp[i][j] 时，dp[i - 1][j] ， dp[i][j - 1] ， dp[i - 1][j - 1] 均已经确定了
    配合增删改这三种操作，需要对应的 dp 把操作次数加一，取三种的最小
 如果刚好这两个字母相同 word1[i - 1] === word2[j - 1]，那么可以直接参考 dp[i - 1][j - 1] ，操作不用加一

    借了张图 diagram.png 直观表达下