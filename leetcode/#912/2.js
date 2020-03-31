/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
};

console.log(sortArray([5,2,3,1]));
console.log(sortArray([5,1,1,2,0,0]));