/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let res = 0,
        len = nums.length;
    if (len < 2) return 0;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            if (nums[i] > nums[j]) res += 1;
        }
    }
    return res;
};

console.log(reversePairs([7,5,6,4]));
console.log(reversePairs([7,8]));
console.log(reversePairs([7]));