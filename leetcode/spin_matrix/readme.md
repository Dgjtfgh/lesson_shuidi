# LeetCode算法之旋转矩阵 #面试题01.07
https://leetcode-cn.com/problems/rotate-matrix-lcci/

- 使用辅助数组    完成行列的转换

- 找到交换的规律
    matrix[i][j] = matrix[len-j-1][j];
    matrix[len-j-1][i] = matrix[len-i-1][len-j-1];
    matrix[len-i-1][len-j-1] = matrix[j][len-i-1];
    matrix[j][len-i-1] = matrix[i][j];

- 倒序倒置法
1 2 3
4 5 6
7 8 9
1. 将矩阵转置--->  [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
1 4 7
2 5 8
3 6 9
2. 将每一行row倒序reverse ---> matrix.forEach(row=> row.reverse());
7 4 1
8 5 2
9 6 3

