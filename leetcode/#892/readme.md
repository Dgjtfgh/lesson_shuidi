# LeetCode算法之三维形体的表面积 #892
https://leetcode-cn.com/problems/surface-area-of-3d-shapes/

- 一个 N*N 的矩阵 grid[i][j]  存放的是(1*1*1)正方体的个数  求表面积
    将矩阵遍历一遍   求每个位子grid[i][j] 没被周围遮挡的 表面积
    即 
        grid[i][j] 减去 上下左右位置的高度  加上   顶端和底部面积 2