# LeetCode算法之另一个树的子树 #572

给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subtree-of-another-tree

解题思路：
1. 递归   两个数 两两结点比较   遍历所有情况

2. 将两树 按先序遍历放入数组  转成字符串  includes()方法判断是否是子串
    存在问题  转化过程中 null 会清除掉

3. 直接将 两树转化为字符串   判断是否是子串