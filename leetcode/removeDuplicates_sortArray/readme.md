# 删除有序数组的重复项算法

读题:
  sortedArr[1,1,2]   3
  return length      2

  - 一次遍历
    res []  空间复杂度 O(n)
    for 
    排好序  后面的项一定会大于或等于前面的项
    等于要原地删除
    res  length 
    抽象   物理逻辑
- 动图分析
  链接: https://github.com/MisterBooo/LeetCodeAnimation/blob/master/notes/LeetCode%E7%AC%AC26%E5%8F%B7%E9%97%AE%E9%A2%98%EF%BC%9A%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.md
  两个指针 per cur
  cur  一直往前跑  一次循环的每一项遍历
  pre  后面追
  pre cur   arr下标 前一个，后一个
  不等于时  pre+1
  相等时    pre不动，值等于 cur
  从头到尾都是排好序的不重复数
  pre指针 没有跟上cur指针的速度  表示有重复
  pre   cur 间 n个空位
  pre + 1 应删除， 把当前cur的值交给pre

- 快慢指针
  1. 一次循环 cur++ 
  2. cur 跟 pre  arr[] 不等于时
      pre++
      相等时  pre 不动
  3. cur 再走的时候 继续比较
      新的cur 跟旧的pre
      不等于时 pre++ 并把cur值给新的pre
      把因为之前重复空出来的位置给填上
  4. cur > length 

- 数据结构  链表
  [1,1,2] 链表
  LinkedList  next
  1 1 1 next 指向1, 改成指向2
