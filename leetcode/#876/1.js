/**
 * Definition for singly-linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var middleNode = function(head) {
    let ans = current = head,
        len = 1;
    // console.log(ans)
    if(current.next == null) return head;
    while (current.next != null) {
        len++;
        current = current.next;
    }
    for(let i = 1; i <= len/2; i++) {
        ans = ans.next;
    }
    
    return ans;
};

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
const n6 = new ListNode(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

console.log(middleNode(n1));