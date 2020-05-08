# LeetCode算法之最大正方形 #221

在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
链接：https://leetcode-cn.com/problems/maximal-square/

解题思路：
1. 暴力法   计算每个位置的最大面积 取最大值

2. 动态规划
    dp[i][j]表示以matrix[i][j]为右下角的顶点的可以组成的最大正方形的边长。
    如果matrix[i][j]等于0，那么就不用看了，直接等于0。
    如果matrix[i][j]等于1，那么我们将matrix[i][j]分别往上和往左进行延伸，直到碰到一个0为止。
    公式得：dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1;

遇到问题：
  二位数组的定义有问题              没弄明白咋回事
  1. let dp = new Array(row).fill(Array(col).fill(0));   不行
  2. let dp = Array.from({       可行
        length: row
      }, x => Array.from({
        length: col
      }))
