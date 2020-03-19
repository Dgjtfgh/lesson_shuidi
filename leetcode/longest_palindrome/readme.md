# LeetCode算法之最长回文串 #409
https://leetcode-cn.com/problems/longest-palindrome/

- 用map记录每个字符出现的次数  count记录长度
    出现次数为偶数 i  全都能用的上                    count += i
    出现次数为奇数 j  有一个无法用上                  count += (j-1)
    有出现次数为奇数的 可以从中的字符选一个作为  中心   count += 1

- 用数组实现
    将字符转化为ASCII    charCodeAt()
    
    由于 a 的 ascii为 65  ， Z 的 ascii为 122  
    为不浪费太多空间  将字符ASCII值-65 作为下标 存放 该字符出现的次数     
    数组定义长度 58 并全填充为 0   new Array(58).fill(0)

    