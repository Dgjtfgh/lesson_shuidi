# LeetCode算法之合并区间 #56
https://leetcode-cn.com/problems/merge-intervals/

1. 先以左边界 排序
2. 遍历
    if 后一项的左边界 <  前一项的右边界  重叠了
        定义 temp 保存 重叠了的 最大右边界
        if 前一项的右边界 > 后一个的右边界  前一项包含后一项 
        else 下次循环
    else 
        res.push([起始项, temp])

- 优化
    不用temp 记录
    先将起始项 push 进 res[]   修改 res[res.length-1][1]