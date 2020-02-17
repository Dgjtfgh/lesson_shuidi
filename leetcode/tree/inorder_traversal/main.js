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

var inorderTraversal = function(root) {
    var stack = [],
        result = [],
        cur;
    cur = root;
    while(stack.length > 0 || cur != null) {
        if (cur != null) {
            stack.push(cur);  // 入栈
            cur = cur.left;
        } else {
            cur = stack.pop(); // 出栈
            result.push(cur.val);
            cur = cur.rigth;  //
        }
    }
    return result;
}

console.log('中序遍历：',inorderTraversal(a1));