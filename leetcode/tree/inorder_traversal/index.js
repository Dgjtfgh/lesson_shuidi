// 二叉树
function TreeNode(val) {  // 形成一棵树的节点
    this.val = val;
    this.left = this.rigth = null;  // 左指针， 右指针
}

var a1 = new TreeNode(1); // root 根节点
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);
a1.left = a2;
a1.rigth = a3;
// 2 的子树    用递归的思想去形成
var a4 = new TreeNode(4);
var a5 = new TreeNode(5);
a2.left = a4;
a2.rigth = a5;
var a6 = new TreeNode(6);
var a7 = new TreeNode(7);
a3.left = a6;
a3.rigth = a7;
// 一个节点， 左右指向另外两个节点
// 递归执行，每个子节点(左边， 右边) 变成新的根节点
// 退出条件是 叶子节点

var inorderTraversal = function(root) {
    let arr = []; // 放节点结果的数组
    const inorder = root => {
        if (root === null) return null;
        arr.push(root.val);
        inorder(root.left); // 左子树一直递归
        inorder(root.rigth);// 右子树一直递归
    }
    inorder(root);
    return arr;
}

console.log('先序遍历：',inorderTraversal(a1));