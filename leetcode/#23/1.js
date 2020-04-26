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
// var mergeKLists = function (lists) {
//     if (lists.length === 0) return null;
//     if (lists.length === 1) return lists[0];
//     let head = new ListNode(null);
//     let res = head;
//     let temp = [];
//     for (let i = 0; i < lists.length; i++) {
        
//         if (lists[i] === null || lists[i].length < 1) continue;
//         temp.push([i, lists[i].val]);
//     }
//     // console.log(temp)
//     if (temp.length < 1) return null;
//     temp.sort((a, b) => a[1] - b[1]);
//     check();
//     return head.next;
//     function check() {
//         res.next = new ListNode(lists[temp[0][0]].val);
//         res = res.next;
//         if (lists[temp[0][0]].next !== null) {
//             lists[temp[0][0]] = lists[temp[0][0]].next;
//             temp[0][1] = lists[temp[0][0]].val;
//             temp.sort((a, b) => a[1] - b[1]);
//             check();
//         } else {
//             if (temp.length === 1) return;
//             temp.splice(0, 1);
//             check();
//         }
//     }
// };
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let head = new ListNode(null);
    let res = head;
    let temp = [];
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] === null || lists[i].length < 1) continue;
        // console.log(lists[i])
        while (lists[i] !== null) {
            // console.log(lists[i])
            temp.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    
    // console.log(temp)
    // if (temp.length < 1) return null;
    temp.sort((a, b) => a - b);
    for (let j = 0; j < temp.length; j++) {
        res.next = new ListNode(temp[j]);
        res = res.next;
    }
    return head.next;
};
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