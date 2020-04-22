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
    if (root === null) return [];
    let res = [],
        arr = [];   // 存放每一层结点
    arr.push(root);
    while(arr.length > 0) {
        res.push(arr[arr.length-1].val);
        let len = arr.length;
        while(len > 0) {
            let dom = arr.shift();
            if(dom.left !== null) arr.push(dom.left);
            if(dom.right !== null) arr.push(dom.right);
            len -= 1;
        }
    }
    return res;
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