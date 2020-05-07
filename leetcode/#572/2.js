/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var isSubtree = function (s, t) {
    if (!s) return false;
    if (!t) return true;
    let sarr = [],
        tarr = []; // 放节点结果的数组
    inorder(s, sarr);
    inorder(t, tarr);
    console.log(sarr.join(''), tarr.join(''))
    return sarr.join('').includes(tarr.join(''));
};
function inorder(root, arr) {
    arr.push(root.val);
    if (root.left != null) inorder(root.left, arr); // 左子树一直递归
    else {
        if (root.right != null) arr.push(null);
    }
    if (root.right != null) inorder(root.right, arr);// 右子树一直递归
    // arr.push(root.val);
}
// const a5 = new TreeNode(2);
// const a4 = new TreeNode(1);
const a3 = new TreeNode(5);
const a2 = new TreeNode(4, a3);
// const a1 = new TreeNode(3, a2, a3);

const b3 = new TreeNode(2);
const b2 = new TreeNode(1);
const b1 = new TreeNode(4, null, a3);

console.log(isSubtree(a2, b1));