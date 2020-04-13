# LeetCode算法之鸡蛋掉落 #887
https://leetcode-cn.com/problems/super-egg-drop/

题解学习：https://www.cnblogs.com/grandyang/p/11048142.html

- 动态规划 
    这里有两个变量，鸡蛋数 K 和楼层数 N ，所以使用一个二维数组 dp[i][j] 表示有i个鸡蛋，j层楼要测 需要的最小操作数。
    任意 n(1 <= n <= j) 层扔鸡蛋有两种情况:
      1. 鸡蛋碎掉：接下来就要用 i-1 个鸡蛋来测 n-1 层，所以需要 dp[i-1][n-1] 次操作。
      2. 鸡蛋没碎：接下来还可以用i个鸡蛋来测 j-n 层，所以需要 dp[i][j-n] 次操作。