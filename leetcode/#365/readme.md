# LeetCode算法之水壶问题 #365
https://leetcode-cn.com/problems/water-and-jug-problem/

- 题意
    ax + by =z   存在一组整数(a, b)使等式成立

    看是简单  却感觉无从下手

学习到  裴蜀定理(贝祖定理) https://baike.baidu.com/item/%E8%A3%B4%E8%9C%80%E5%AE%9A%E7%90%86?fromtitle=%E8%B4%9D%E7%A5%96%E5%AE%9A%E7%90%86&fromid=5185441
    若a,b是整数,且最大公约数gcd(a,b)=d，那么对于任意的整数x,y,ax+by都一定是d的倍数。特别地，一定存在整数x,y，使ax+by=d成立。

求最大公约数算法：  质因数分解法、短除法、辗转相除法、更相减损法
(https://baike.baidu.com/item/%E6%9C%80%E5%A4%A7%E5%85%AC%E7%BA%A6%E6%95%B0)