# LeetCode算法之最小栈 #155

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack

解题思路：
- 数组的操作
数组   stack
1. 辅助栈 min_stack  只存放stack里最小的数
    push pop  入栈出栈操作  只在栈顶部  FILO

优化：
    将 min_stack 变成变量 min