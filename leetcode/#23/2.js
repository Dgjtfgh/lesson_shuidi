/**
 * Definition for singly-linked list.
 * 
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    return points(lists, 0, lists.length - 1);
};
function points(lists, i, j) {
    // console.log(lists.length);
    if (i === j) return lists[i];
    if (i > j) return null;
    let mid = i + ((j - i) >> 1);
    return merge(points(lists, i, mid), points(lists, mid + 1, j));
}
function merge(left, right) {
    // console.log(left,'+++', right, '---')
    if (!left || !right) return left ? left : right;
    let l = left,
        r = right,
        head = new ListNode(),
        cur = head;
        // console.log(l.val, r.val)
    while (l && r) {
        // console.log(left.val, right.val)
        if (l.val >= r.val) {
            cur.next = r;
            r = r.next;
        } else {
            cur.next = l;
            l = l.next;
        }
        cur = cur.next;
    }
    cur.next = l ? l : r;
    return head.next;
}
let a1 = new ListNode(1);
let a2 = new ListNode(4);
let a3 = new ListNode(5);
a1.next = a2;
a2.next = a3;

let b1 = new ListNode(1);
let b2 = new ListNode(3);
let b3 = new ListNode(4);
b1.next = b2;
b2.next = b3;

let c1 = new ListNode(2);
let c2 = new ListNode(6);
c1.next = c2;

console.log(mergeKLists([a1, b1, c1]));
console.log(mergeKLists([]));
console.log(mergeKLists([[], []]));