# LeetCode算法之单词的压缩编码 #820
https://leetcode-cn.com/problems/short-encoding-of-words/

- 遍历words  item    截取前面项尾部 item.length的长度 判断有没有与item相等的   没有则 ans += item.length+1
    发现顺序一遍得到的长度不一定最短      还要逆序遍历一遍words

- 优化
    先对words 进行处理     words.map(word => { return word.split('').reverse().join('') }).sort()  
    将每项字符串变成数组 并 反转 转回字符串   再排序       尾部变成了头部 尾部相同的字符串回排列在一起
    reduce()函数   判断前一项和后一项 是否有包含关系  没有则 ans += item.length+1
      用法：  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        total	必需。初始值, 或者计算结束后的返回值。
        currentValue	必需。当前元素
        currentIndex	可选。当前元素的索引
        arr	可选。当前元素所属的数组对象。
        initialValue	可选。传递给函数的初始值

- 再优化
    运用哈希表    
    遍历    判断 每项的尾部是否存在哈希表中  有 则从哈希表中delete()