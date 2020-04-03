# LeetCode算法之字符串转换整数 #8
https://leetcode-cn.com/problems/string-to-integer-atoi/

- 字符串转化
    1. 开头空格处理   过滤
    2. 正负号处理    保留
    3. 数字处理      转整数
    4. 开头非数字和正负号   无效转化  return 0;
    5. 整数溢出

    - trim()方法  返回一个从两头去掉空白字符的字符串，并不影响原字符串本身。
        正则匹配  正负号和数字

    - parseInt(string, radix)  将一个字符串 string 转换为 radix 进制的整数， radix 为介于2-36之间的数。   使用直接完成1-4步
        详细用法：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
