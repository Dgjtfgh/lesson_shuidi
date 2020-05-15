/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 2; i < nums.length; i += 3) {
        if((nums[i] + nums[i-1] + nums[i-2] != nums[i]*3)) {
            return nums[i] ^ nums[i-1] ^ nums[i-2]
        }
    }
    return nums[nums.length - 1];
};

console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0,1,0,1,0,1,99]))