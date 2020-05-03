/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0],
        max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (sum > 0) sum += nums[i];
        else sum = nums[i];
        if (sum > max) max = sum;
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));