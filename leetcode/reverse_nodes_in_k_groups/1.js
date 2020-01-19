function ListNode(val) {
    this.val = val;
    this.next = null;
}

var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(n1);

function reverseKGroup(head, k) {
    if (!head || k == 1) {
        return head;
    }
    var dummy = { // 哨兵结点
        next: head
    }
    // reverse 
    var start = dummy;
    var end = head;    // 初始化   与k相关
    var count = 0;     // 计数器
    while (end != null) {
        count++;
        if (count % k == 0) { // 整除  要翻转  分小组
            start = reverse(start, end.next); // 翻转，要能和其他小组链上
            end = start.next;
        } else {
            end = end.next;// 更新end的值
        }
        
    }
    return dummy.next;
}
// start , end 是要reverse
// 一次翻转
var reverse = function(start, end) {
    var cur = start.next; // 当前结点 头结点
    var prev = start;     // 前驱结点
    var first = cur;      // 保存第一个结点   尾结点  下一组的头指针
    while (cur != end) {
        var temp = cur.next; // 后继结点
        cur.next = prev;     // 翻转
        prev = cur;          // 当前结点变成下一次的前驱结点
        cur = temp;
    }
    start.next = prev;  // prev 变成小组的头结点
    first.next = cur;   // 原来的头结点变成尾结点
    // 小组之间链起来，上一次的尾结点指向下一个小组的头结点
    return first;
}
console.log(reverseKGroup(n1, 3));