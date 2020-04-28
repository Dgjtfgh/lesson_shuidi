/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let res = new Set;
    nums.forEach(element => {
        res.has(element) ? res.delete(element) : res.add(element);
    });
    return Array.from(res);
};
console.log(singleNumbers([4,1,4,6]));
console.log(singleNumbers([1,2,10,4,1,4,3,3]));