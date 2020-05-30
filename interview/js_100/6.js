// MVVM  数据劫持

// var arr = [1];
// arr[10000] = 1;  
// // arr  V8存储   对象
// // 
// function a() {
//     console.time();
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
//     // for (let i in arr) {  // in 遍历所有 key 相当于 forEach
//     //     console.log(i);
//     // }
//     // for (let i of arr) {  // of 遍历所有 value
//     //     console.log(i);
//     // }
//     console.timeEnd();
// }

// a();

// function b() {
//     console.time();
//     arr.forEach(item => console.log(item))
//     console.timeEnd();
// }
// b();

// 对数组进行数据劫持
// defineProperty是可以对数组进行数据劫持，不过对新增的数据项没有效果
var arr = [1,2,3,4];
arr.forEach((item, index) => {
    // 对每一个属性单独的数据劫持， get  set
    Object.defineProperty(arr, index, {
        set: function(val) {
            console.log('set');
            item = val;
        },
        get: function(val) {
            console.log('get');
            return item;
        }
    })
})

arr[1];
arr[1] = 1;
// arr[5] = 2;
arr.push(5);

// 性能代价和获取的用户体验不成正比