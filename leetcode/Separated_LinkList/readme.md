# LeetCode86 分割链表

给定 LinkList   x
隔成两个区  每个结点的初始相对位置

1. 形成两个区？  每个区都是链表
定义两个链表  smaller  bigger
2. 一次链表
  x 值小的放  smaller
    值大的放  bigger
3. 将两个球连起来  smaller.next = bigger

通过两个链表  分隔链表的不同区域的子链表， 两个子链表再组合起来