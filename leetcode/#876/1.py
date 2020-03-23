# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    def __repr__(self):
        if self:
            return "{}-{}".format(self.val, repr(self.next))

class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        ans = current = head
        len = 1
        if current.next == None:
            return head
        while current.next != None:
            len += 1
            current = current.next
        print(len)
        for i in range(1, int(len/2)+1):
            ans = ans.next
        return ans

n1 = ListNode(1)
n2 = ListNode(2)
n3 = ListNode(3)
n4 = ListNode(4)
n5 = ListNode(5)
# n6 = ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
# n5.next = n6
# print(n1)
demo = Solution()
print(demo.middleNode(n1))