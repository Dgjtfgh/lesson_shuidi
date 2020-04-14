/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null; 
}

var addTwoNumbers = function(l1, l2) {
    let n1 = '',
        n2 = '';
    while (l1) {
        n1 = n1 + l1.val;
        l1 = l1.next;
    }
    while (l2) {
        n2 = n2 + l2.val;
        l2 = l2.next;
    }
    let res = addTwoNumber(n1, n2);
    let head = {};
    let cur = head;
    for (let i = 0; i < res.length; i++) {
        cur.next = new ListNode(res[i]);
        cur = cur.next;
        // const node = new ListNode(res[i]);
        // if (head === null) {
        //     head = node;
        // } else {
        //     cur = head;
        //     while (cur.next) {
        //         cur = cur.next;
        //     }
        //     // console.log(cur)
        //     cur.next = node;
        // }
    }
    return head;
};

function addTwoNumber(str1, str2) {
    // 1. 字符串从尾部到首部
    // 2. 两个数的位数是不一样的
    var carry = 0;  // 进位 计算每一个回合的进位 
        l1 = str1.length,
        l2 = str2.length,
        arr = [];  // 放结果  
    var max = Math.max(l1, l2);  // 不一样长
    for(var i = l1 - 1, j = l2 - 1, n = max - 1; n >= 0; n--, i--, j--){
        var sum = (+str1[i] || 0) + (+str2[j] || 0) + carry; // 每一次的相加和
        // console.log(sum);
        // break;
        if(sum >= 10){
            carry = 1;
            arr.push(sum - 10);
        } else {
            carry = 0;
            arr.push(sum);
        }
    }
    if(carry > 0) arr.push(carry);
    return arr.reverse();
}
const n1 = new ListNode(7);
const n2 = new ListNode(2);
const n3 = new ListNode(4);
const n4 = new ListNode(3);
n1.next = n2;
n2.next = n3;
n3.next = n4;

const a1 = new ListNode(5);
const a2 = new ListNode(6);
const a3 = new ListNode(4);
a1.next = a2;
a2.next = a3;

console.log(addTwoNumbers(n1, a1));