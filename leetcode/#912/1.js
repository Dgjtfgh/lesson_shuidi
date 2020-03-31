/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};

console.log(sortArray([5,2,3,1]));
console.log(sortArray([5,1,1,2,0,0]));