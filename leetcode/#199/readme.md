# LeetCode算法之二叉树的右视图 #199

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view/

- 深度优先
    按 根结点 -> 右子树 -> 左子树 的遍历顺序  记录每层最先访问的结点
    res = [] 存放每次最先访问的结点   res.length 判断 二叉树的深度

- 广度优先
    取每层最后一个结点
    定义数组 res 存放结果   arr 存放结点
    arr 存放结点方式：  每层从左往右一次 push 进数组   arr数组头部去结点 访问其下一层结点 push 进arr尾，将父结点移除 shift()  循环这个过程
