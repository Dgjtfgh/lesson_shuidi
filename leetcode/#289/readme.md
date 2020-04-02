# LeetCode算法之生命游戏  #289
https://leetcode-cn.com/problems/game-of-life/

- 定义一个数组 dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]
    循环这个数组  实现八个方位

    对 board 深拷贝   res = JSON.parse(JSON.stringify(board))  res用于记录周围 live 的数量
    根据规则对 board 进行更新

- 优化    原地算法
    原来为死细胞且活了的标为 -1
    原来为活细胞且死了的标为  2
    board[i][j]> 0   live += 1
    最后  把  -1 换成 1  2 换成 0