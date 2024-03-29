// interface 不太好理解
// getUserInfo 的开发者
// model / memberEntity
// 类型 基础类型， 在多个地方会使用到的时候
// user 实现了IUser 一样的属性和方法的对象 接口
interface IUser {
    name: string,
    age: number
}

const getUserInfo = (user:IUser): string => {
    return `name: ${user.name}, age: ${user.age}`
}

getUserInfo({name: '牛子蛮', age: 18});