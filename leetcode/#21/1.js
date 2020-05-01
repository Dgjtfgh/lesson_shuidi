/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l1 ? l1 : l2;
    let head = new ListNode(),
        cur = head;
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1 : l2
    return head.next;
};

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(4);
const n4 = new ListNode(1);
const n5 = new ListNode(3);
const n6 = new ListNode(4);
n1.next = n2;
n2.next = n3;
n4.next = n5;
n5.next = n6;

console.log(mergeTwoLists(n1, n4));
const a = new ListNode(1);
console.log(mergeTwoLists(a, []));