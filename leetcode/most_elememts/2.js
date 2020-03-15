/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    if (len == 1) return nums[0];
    nums.sort();
    if (len % 2 == 0) return nums[len / 2 ];
    else return nums[(len + 1) / 2 - 1];
};

console.log(majorityElement([2,2,1,2]));