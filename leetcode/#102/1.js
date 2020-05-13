/**
 * Definition for a binary tree node.
 
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var levelOrder = function (root) {
    let res = [],
        temp = [];
    if (!root) return res;
    temp.push(root);
    while (temp.length !== 0) {
        res.push([]);
        let len = temp.length;
        for (let i = 0; i < len; i++) {
            let node = temp.shift();
            res[res.length-1].push(node.val);
            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
        }
    }
    return res;
};

var a1 = new TreeNode(3); // root 根节点
var a2 = new TreeNode(9);
var a3 = new TreeNode(20);
a1.left = a2;
a1.right = a3;

var a4 = new TreeNode(15);
var a5 = new TreeNode(7);
a3.left = a4;
a3.right = a5;

console.log(levelOrder(a1));