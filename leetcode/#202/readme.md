# LeetCode算法之快乐数 #202

编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 True ；不是，则返回 False 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number。

解题思路：
- set 存储 下一个值   碰到相同的则表示死循环 return false
    碰到 1  则 return true

- 快慢指针  
    死循环  快慢指针一定会碰头