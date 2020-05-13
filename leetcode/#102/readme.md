# LeetCode算法之二叉树的层序遍历 #102

给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

解题思路：
- 广度优先遍历
    数组存放结点
    数组头取上层结点，将其子节点push入数组