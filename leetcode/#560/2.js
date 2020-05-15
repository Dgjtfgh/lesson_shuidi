/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let len = nums.length,
        map = new Map,
        sum = 0,
        res = 0;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        if (sum === k) res += 1;
        if (map.has(sum - k)) res += map.get(sum - k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return res;
};

console.log(subarraySum([1,1,1], 2));