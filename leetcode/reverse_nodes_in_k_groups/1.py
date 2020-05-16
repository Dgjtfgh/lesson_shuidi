# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __repr__(self):
        if self:
            return "{}-{}".format(self.val, repr(self.next))

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        if head is None or k < 2:
            return head
        dummy = ListNode(0)
        dummy.next = head
        start = dummy
        end = head
        count = 0
        while end:
            count += 1
            if count % k == 0:
                start = self.reverseList(start, end.next)
                end = start.next
            else:
                end = end.next
        return dummy.next

    def reverseList(self, start, end):
        pre, cur = start, start.next
        first = cur
        # print(end.val)
        while cur != end:
            next = cur.next
            cur.next = pre 
            pre = cur
            cur = next
        start.next = pre
        # print(start.val, pre.val, cur.val)
        first.next = cur
        # print(first)
        return first


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
print(demo.reverseKGroup(n1, 2))