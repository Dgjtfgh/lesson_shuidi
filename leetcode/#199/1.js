
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
var rightSideView = function(root) {
    let res = [];
    dfs(root, res, 0);
    return res;
};
function dfs(root, res, depth) {
    if (root === null) return null;
    if (depth === res.length) res.push(root.val);
    dfs(root.right, res, depth + 1); // 右子树一直递归
    dfs(root.left, res, depth + 1);  // 左子树一直递归
};

let root = new TreeNode(1);
let n1 = new TreeNode(2);
let n2 = new TreeNode(3);
let n3 = new TreeNode(4);
let n4 = new TreeNode(5);

root.left = n1;
root.right = n2;
n1.right = n4;
n2.right = n3;

console.log(rightSideView(root));