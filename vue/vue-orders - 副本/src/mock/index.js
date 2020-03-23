import Mock from 'mockjs'

// const dataList = []; //列表数据

// Mock.Random.extend({
//   statuses: function (date) {
//     var statuses = ['canceled', 'created', 'completed']
//     return this.pick(statuses)
//   }
// })

const dataList = {
  'orders|100':[{
    "_id|+1": 1, // id 自增
    "name": "@name",
    "orderDate":"@datetime",
    "status|1": ['created', 'completed', 'canceled'], // 在三种状态里随机
    "shippingFee": "@float(0,8,0,2)",
    "total": "@float(8, 100, 0, 2)"
  }]
}
// url  ==   node api url
Mock.mock('/api/orders', 'post', dataList)

// 假数据生产  

export default Mock;