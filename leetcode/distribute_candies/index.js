/**
 * @param {Array length even} candies 
 * @return {number} count
 */
var distributeCandies = (candies) => {
    let count = 0;
    // 1. 种类数，umique
    // 出现过的？
    let obj = {}; // 对象字面量
    // candies.forEach(item => {
    //     console.log(item);
    // });
    for(let item of candies) {
        // console.log(item);
        if (!obj[item]) {
            obj[item] = 1;
            count++;
        }
    }
    // if (count > candies.length / 2) {
    //     return candies.length / 2;
    // }else{
    //     return count;
    // }
    return (count >= candies.length >> 1) ? candies.length >> 1 : count;
    // return count;
}
console.log(distributeCandies([1,1,2,2,3,3]));
