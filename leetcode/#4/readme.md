# LeetCode算法之寻找两个正序数组的中位数 #4

给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays

解题思路：
- 两数组归并排序为一个数组
    取中位数

- 二分查找
关键点：
  1. 要两个排好序的数组成左右两等份，需满足len(Aleft)+len(Bleft)=(m+n+1)/2-m是数组A的长度， n是数组B的长度
  2. 等分后 A左边最大(maxLeftA), A右边最小(minRightA), B左边最大(maxLeftB), B右边最小(minRightB) 
  满足 (maxLeftA <= minRightB && maxLeftB <= minRightA)
  3. 有了这两个条件，那么中位数就在这四个数中，根据长度为奇数或者是长度为偶数，
    长度为奇数：
        median = max(maxLeftA, maxLeftB)
    长度为偶数：
        median = (max(maxLeftA, maxLeftB)+min(minRightA, minRightB))/2
