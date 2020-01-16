function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 1. 原地， 没有两个数组可以用了， O(n)
// 2. 哨兵结点
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    // 哨兵结点  指向第一个 奇结点
    // 奇数链表的头结点
    const dummyHead1 = {
        next: head
    }
    // 偶数链表的头结点
    const dummyHead2 = {
        next: head.next
    }
    let odd = dummyHead1.next;
    let even = dummyHead2.next;
    while (odd && odd.next && even && even.next) { // 一次遍历链表
        const oddNext = odd.next.next;  // 下一个奇数结点
        const evenNext = even.next.next;// 下一个偶数结点
        odd.next = oddNext;  // 当前奇数结点的next 指向
        even.next = evenNext;// 当前偶数结点的next 指向

        odd = oddNext;
        even = evenNext;
    }
    // 拼接奇偶链表
    odd.next = dummyHead2.next;
    return dummyHead1.next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(oddEvenList(n1));