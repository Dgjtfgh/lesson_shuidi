/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0],
        min = nums[0],
        res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = min;
        min = Math.min(nums[i], Math.min((max * nums[i]), (min * nums[i])));
        max = Math.max(nums[i], Math.max((max * nums[i]), (temp * nums[i])));
        res = Math.max(res, max);
    }
    return res;
};
console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([0,2]));


