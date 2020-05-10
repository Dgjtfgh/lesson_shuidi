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
    let res;
    const DFS = (root, p, q) => {
        if (!root) return false;
        let left = DFS(root.left, p, q);
        let right = DFS(root.right, p, q);
        // 满足以下任一情况时，父节点满足要求
        // 1. (left && right)： left、right 均为 true，说明 p、q 分别处于左右子树中
        // 2. ((left || right) && (node.val === p.val || node.val === q.val))：
        //    (left || right)： left 或 right 为 true
        //    (node.val === p.val || node.val === q.val)：且 p 或 q 的值等于父节点的值
        //    此时说明 p 或 q 为父节点
        if ((left && right) || ((left || right) && (root.val === p.val || root.val === q.val))) res = root;
        // 否则
        // 若当前节点不是叶子节点，则返回左子树或右子树(左右子树不可能同时存在)
        // 若当前节点为叶子节点，则返回 p 或 q 的值是否为当前节点的值，这里决定了父节点的值为 True / False
        return left || right || (root.val === p.val || root.val === q.val);

    }
    DFS(root, p, q);
    return res;
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
const q = new TreeNode(4);
console.log(lowestCommonAncestor(root, p, q));


