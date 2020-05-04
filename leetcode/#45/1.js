/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length,
        farposition = 0,
        maxposition = 0,
        step =  0;
    for (let i = 0; i < len - 1; i++) {
        maxposition = Math.max(maxposition, i + nums[i]);
        // console.log(i, farposition, maxposition)
        if (i === farposition) {
            farposition = maxposition;
            step += 1;
        }
        if (farposition >= len - 1) break;
    }
    return step;
};

console.log(jump([1]));
console.log(jump([2,3,1,1,4]));
console.log(jump([2,2,1,1,4]));
console.log(jump([2,2,4,1,4,2,5]));