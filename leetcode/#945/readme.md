# LeetCode算法之使数组唯一的最小增量 #945
https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/

- 数第一次出现  map 存放
    如果map有这个数  将下标存入 stack
    循环 stack    stack[i]++    A[ stack[i] ] 存在map 继续stack[i]++
    开始用来两重循环    耗费时间过大     用while + if 节省一重循环   由于 0 <= A.length <= 40000  0 <= A[i] < 40000    耗时还是过大

    得出结论  一个一个加 的计数方法肯定是过于耗时

- 优化  
    数组先排下序
    只要数组后一项比前一项大1 就满足了