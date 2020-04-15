const getUserInfo2 = function(user) {  // 参数随意
    return `name: ${user.name}, age: ${user.age}`
}

// js 不会做运行前检测  动态语言
// java ts 静态语言  检测语法
// 多人协作时  不严格的语法会带来大麻烦
console.log(getUserInfo2({name: "李海"}));
