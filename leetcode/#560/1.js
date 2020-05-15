/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let len = nums.length,
        sum = 0,
        res = 0;
    for (let i = 0; i < len; i++) {
        sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];
            if (sum === k) {
                res += 1;
            }
        }
    }
    return res;
};

console.log(subarraySum([1,1,1], 2));