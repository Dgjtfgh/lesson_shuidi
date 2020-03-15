/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1, // 次数计数
        majority = nums[0];  // 假设第一个数是majority
    
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
        } 
    }
    return majority;
};

console.log(majorityElement([2,2,1,1,1,2,2]));