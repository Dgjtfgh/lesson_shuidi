/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    nums.forEach(item => {
        map.has(item) ? map.set(item, map.get(item)+1) : map.set(item, 1);
    })
    for (let arr of map) {
        if (arr[1] === 1) return arr[0];
    }
};

console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0,1,0,1,0,1,99]))