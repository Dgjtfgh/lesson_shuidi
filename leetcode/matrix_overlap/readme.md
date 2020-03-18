# LeetCode算法之矩形重叠 #835
https://leetcode-cn.com/problems/rectangle-overlap/

- 初始想法
    rec1有一个顶点在rec2内则矩形必定重叠
    经过一番尝试。。。
    情况不全面 这样无法完全覆盖所有情况

- 反向思考  不重叠的情况
    rec1X 的最小值 大于等于 rec2X 的最大值 
    rec1X 的最大值 小于等于 rec2X 的最小值
    rec1Y 的最小值 大于等于 rec2Y 的最大值 
    rec1Y 的最大值 小于等于 rec2Y 的最小值

    学习题解   可以用 Math.max() 与 Math.min() 进行简单优化