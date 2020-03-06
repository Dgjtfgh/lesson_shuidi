时间处理再 后台
数据存储  mongodb  date

ISODate   mongodb日期格式
ISODate   国际时间
local     自动计算


db.orders.findOne({});

orders 订单表
某个月的订单，  总金额   时间
1. dump 文件   导入mongodb数据库   复杂运算
  dump/mock/order.bson   文档数据类型  
  bson  数据文件

所有订单的总销售额是多少？
$gte  $lt  指令
  db
    .orders
    .findOne({orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate(2019-02-01)}})

  db.orders.findOne({orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate(2019-02-01)}, status: 'create'})

所有订单的总金额
每一条记录都要
大数据运算  mongodb  
group by

2019年 第一季度 已完成订单的订单总金额 和 订单总数
{orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-04-01")} status:'complete'}  $sum  $total

filter  过滤器
aggregate  聚合查询  上一个条件的结果，是下一个的输入

$match   where
$group   group by

第一季度已完成的订单
db.orders.aggregate([ { $match: {status: "completed", orderDate: {$gte: ISODate("2019-01-01"), $lt: ISODate("2019-04-01") }}}]);

todo 活动  activity  开始日期， 结束日期  time
可以给时间戳