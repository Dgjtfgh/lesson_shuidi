/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let list = [],
        temp = new Array(nums.length).fill(true);
    backtrack(nums, res, list, temp);
    return res;
};
function backtrack(nums, res, list, temp) {
    if (list.length === nums.length) {
        res.push(list);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!temp[i]) continue;
        list.push(nums[i]);
        temp[i] = false;
        backtrack(nums, res, list.slice(0), temp);
        list.pop();
        temp[i] = true;
    }
}
console.log(permute([1,2,3]));
