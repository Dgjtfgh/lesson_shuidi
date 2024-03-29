# LeetCode算法之每个元音包含偶数次得最长子字符串 #1371

给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次。
链接：https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/

解题思路：
只考虑每个元音奇偶次数，因此考虑用二进制来记录；
    定义特征，aeiou 分别对应二进制 00001，00010，00100，01000，10000
    其中 0 表示对应元音出现了偶数次数，1 表示奇数
遍历字符串
    根据异或运算规律，异或本身为 0，所以当重复出现偶数次，对应位变为 0，否则为 1
由这个规律可以断定，当再次出现这个 arr 的时候，一定出现了偶数次
为了方便解释，arr 如下用二进制表示：
例如，arr 的值变化为 31-->30-->28-->29-->31
对应的二进制位 [11111]-->[11110]-->[11100]-->[11101]-->[11111]
一个合理的字符串变化：aeiou --> aeioua -->aeiouae-->aeiouaea-->aeiouaeae
由此可见，从 aeiou 到 aeiouaeae 这个过程中，多余出来的 aeae 为符合条件的字符串
所以，在这个过程中，不管中间发生了什么样的变化，这两个状态之间对应的元音为偶数，也就是一定符合题意的字符串
因此，不断更新 res，来获得最大字符串长度
