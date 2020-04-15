// type 关键字
type IUserInfoFunc = (user: IUser) => string;
interface IUser {
    name: string,
    age: number
}

const getUserInfos:IUserInfoFunc = (user) => {
    return `name: ${user.name}, age: ${user.age}`
}

getUserInfos({name: '牛子蛮', age: 18});