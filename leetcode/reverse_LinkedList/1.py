# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __repr__(self):
        if self:
            return "{}-{}".format(self.val, repr(self.next))

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None or head.next == None: 
            return head 
        cur = head
        pre = None
        while cur:
            next = cur.next
            cur.next = pre 
            pre = cur
            cur = next
        return pre

n1 =  ListNode(1)
n2 =  ListNode(2)
n3 =  ListNode(3)
n4 =  ListNode(4)
n5 =  ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
demo = Solution()
print(demo.reverseList(n1))