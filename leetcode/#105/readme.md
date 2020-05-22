# LeetCode算法之从前序与中序遍历序列构造二叉树 #105

根据一棵树的前序遍历与中序遍历构造二叉树。
注意:
你可以假设树中没有重复的元素。
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

解题思路：
- 递归思路
    前序遍历确定根结点
    中序遍历以根结点为中心确定左右子树
    以此递归
使用 slice()方法  分开左右子树 分别传入递归

优化
    slice()方法换成   子树的 开始下标 与 结束下标