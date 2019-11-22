/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var n;
    var len = nums.length;
    if (len == 0) {
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    var max_n_q1 = Math.max(nums[0], nums[1]),
    max_n_q2 = nums[0],
    max_n = max_n_q1;
    for (n = 2; n < len; n++) {
        max_n = Math.max(max_n_q1, max_n_q2 + nums[n]);
        max_n_q2 = max_n_q1;
        max_n_q1 = max_n;
    }
    return max_n;
};
console.log(rob([1,1]));