/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心算法
var canJump = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if(max < i) return false;
        max = Math.max(nums[i] + i, max);
    }
    return max >= nums.length - 1;
};
console.log(canJump([2, 0]));
console.log(canJump([2, 5, 0, 0]));
// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([1, 3, 1, 2, 4]));