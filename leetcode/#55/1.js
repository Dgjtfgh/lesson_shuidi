/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // let i = 0,
    //     flag = false;
    //     flag = jump(nums, i, flag);
    // return flag;
    return jump(nums, 0);
};
    
// function jump(nums, i, flag) {
//     if (i >= nums.length - 1) {
//         return true;
//     }
//     if (nums[i] === 0) return flag;
//     if (flag === true) return true;
//     for (let j = i + 1; j <= i + nums[i]; j++) {
//         flag = jump(nums, j, flag);
//     }
//     return flag;

// }
function jump(nums, i) {
    if (i === nums.length - 1) {
        return true;
    }
    let temp = Math.min(i + nums[i], nums.length-1)
    for (let j = i + 1; j <= temp; j++) {
        if(jump(nums, j)) return true;
    }
    return false;

}
console.log(canJump([2, 0]));
console.log(canJump([2, 5, 0, 0]));
// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([1, 3, 1, 2, 4]));