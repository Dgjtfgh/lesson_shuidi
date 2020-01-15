# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __repr__(self):
        if self:
            return "{}-{}".format(self.val, repr(self.next))

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        prev = ListNode(0) # 哨兵结点
        prev.next = head
        cur = prev
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return prev.next

n1 =  ListNode(1)
n2 =  ListNode(2)
n3 =  ListNode(3)
n4 =  ListNode(4)
n5 =  ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
print(n1)
demo = Solution()
print(demo.removeElements(n1))