/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    return assist(0, preorder.length-1, 0, inorder.length-1);
    function assist(Pstart, Pend, Istart, Iend) {
        if (Pstart > Pend) return null;
        let root = new TreeNode(preorder[Pstart]);
        let mid = map.get(preorder[Pstart]);
        let left = mid - Istart;
        root.left = assist(Pstart+1, Pstart+left, Istart, mid-1);
        root.right = assist(Pstart+left+1, Pend, mid+1, Iend);
        return root;
    }
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));