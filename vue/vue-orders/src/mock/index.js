import Mock from 'mockjs'

// const dataList = []; //列表数据
const Random = Mock.Random

Random.extend({
  statuses: function (date) {
    var statuses = ['canceled', 'created', 'completed']
    return this.pick(statuses)
  }
})

const total = 100;
const dataList = [];

for (let i = 0; i < total; i++) {
  const template = {
    "_id": 1 + 1, // id 自增
    "name": Random.name(),
    "orderDate": Random.date(),
    "status": Random.statuses(), // 在三种状态里随机
    "shippingFee": Random.float(0, 8, 0, 2),
    "total": Random.float(10, 100, 0, 2)
  }
  dataList.push(template);
}

// const dataList = {
//   'orders|100':[{
//     "_id|+1": 1, // id 自增
//     "name": "@name",
//     "orderDate":"@datetime",
//     "status|1": ['created', 'completed', 'canceled'], // 在三种状态里随机
//     "shippingFee": "@float(0,8,0,2)",
//     "total": "@float(8, 100, 0, 2)"
//   }]
// }
// url  ==   node api url
// Mock.mock('/api/orders', 'post', dataList)

// Mock 分页
Mock.mock('/api/orders', 'post', (params) => {
  // console.log(params);
  const info = JSON.parse(params.body);
  console.log(info);
  const { page = 1, limit = 20} = info.params;
  console.log(page, limit);
  return {
    // page,
    // limit,
    total,
    result: dataList.slice((page - 1) * limit, page*limit)
  }
})

// 假数据生产  

export default Mock;