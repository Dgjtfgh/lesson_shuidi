/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;  // 原数组长度
    let slowP = 0,            // 慢指针
        fastP = 0;            // 快指针
    for (fastP = 1; fastP < len; fastP++) {
        // fastP 碰到不等于 slowP 的值，将 fastP值赋给 slowP位置后一个
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP];
        }
    }
    return slowP + 1;   // slowP停下来的地方
};
console.log(removeDuplicates([1, 1, 2, 3, 3, 3]));