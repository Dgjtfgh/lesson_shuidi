/**
 * Definition for a binary tree node.
 * 
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root === p || root === q) return root;
    console.log(lowestCommonAncestor(root.left, p, q))
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    // // console.log(left, right)
    if (left && right) return root;
    else if (left) return left;
    else if (right) return right;
    return null;
};

const root = new TreeNode(3);
const r2 = new TreeNode(5);
const r3 = new TreeNode(6);
const r4 = new TreeNode(2);
const r5 = new TreeNode(7);
const r6 = new TreeNode(4);
const r7 = new TreeNode(1);
const r8 = new TreeNode(0);
const r9 = new TreeNode(8);
root.left = r2;
root.right = r7;
r2.left = r3;
r2.right = r4;
r4.left = r5;
r4.right = r6;
r7.left = r8;
r7.right = r9;

const p = new TreeNode(5);
const q = new TreeNode(1);
console.log(lowestCommonAncestor(root, p, q));


