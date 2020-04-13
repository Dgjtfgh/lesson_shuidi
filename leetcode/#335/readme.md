# LeetCode算法之设计推特 #335
https://leetcode-cn.com/problems/design-twitter/

- 设计数据结构
  1. 二维数组存放 用户id和推特id  [[userid, tweetid], [userid, tweetid], ...]  根据时间将推特  unshift() 进入数组 
  也可以用链表实现
  2. Map 结构   以 userid 作为 key 存放 关注了他的userid数组 关注则添加 push()  取消关注则移除 splice()
