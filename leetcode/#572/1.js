/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSubtree = function(s, t) {
     
};

const a5 = new TreeNode(2);
const a4 = new TreeNode(1);
const a3 = new TreeNode(5);
const a2 = new TreeNode(4, a4, a5);
const a1 = new TreeNode(3, a2, a3);

const b3 = new TreeNode(2);
const b2 = new TreeNode(1);
const b1 = new TreeNode(4, b2, b3);

console.log(a1, b1);