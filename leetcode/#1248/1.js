/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let arr = [];
    arr.push(-1);
    let j = 1,
        res = 0;
    for (let i = 0; i <= nums.length; i++) {
        // if (nums[i]%2 === 1 || i ===nums.length ) arr.push(i);
        if (nums[i] & 1 || i ===nums.length ) arr.push(i);
        if (arr.length - j > k) {
            res += (arr[j]-arr[j-1])*(arr[j+k]-arr[j+k-1]);
            j += 1;
        }
    }
    
    return res;
};

console.log(numberOfSubarrays([1,1,2,1,1], 3));
console.log(numberOfSubarrays([2,4,6], 1));
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2));