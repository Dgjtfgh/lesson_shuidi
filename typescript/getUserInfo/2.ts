
const getUserInfo1 = function(user :{name:string, age: number}) {  // 参数随意
    return `name: ${user.name}, age: ${user.age}`
}

// 中间过程意料不到的可能， 数据从数据库里取的
// js 感性写代码
// java 理性写代码
// console.log(getUserInfo({name: "牛剑锋", age: 18}))