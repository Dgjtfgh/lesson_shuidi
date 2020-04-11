const arr = [ {age: 10}, {age: 20}]
// age 年龄总数
// function sum() {
//     let sum = 0;
//     for(let i = 0; ;) {
//         sum
//     }
//     return sum;
// }
let sum = arr.reduce((acc, cur) => {
    return acc += cur.age;
}, 0);
console.log(sum);
// age * 2
const newArr = arr.map(e => {
    return {
        ...e,
        age: e.age * 2
    }
})
console.log(newArr);

// 让 2s 后输出 'hello world' 完成 test
function test(callback) {
    setTimeout(() => {
        callback('hello world')
    }, 2000);
}

test(function(str) {
    console.log(str);
})
// for 循环实现 map()
Array.prototype.mymap = function(cb) {
    let t = [];
    for (let i = 0; i < this.length; i++) {
        // console.log(this, '---')
        t.push(cb(this[i]));
    }
    return t;
}

const newArr1 = arr.mymap(e => {
    return {
        ...e,
        age: e.age*2
    }
});
console.log(newArr1);
// reduce() 实现  map()
Array.prototype.mymap1 = function(cb) {
    return this.reduce((acc, cur) => {
        let res = cb(cur);
        return acc.concat(res)
    }, []);
}
const newArr2 = arr.mymap1(e => {
    return {
        ...e,
        age: e.age*2
    }
});
console.log(newArr2);