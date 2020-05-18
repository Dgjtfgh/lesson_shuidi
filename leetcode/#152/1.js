/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxproduct = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product = nums[j] * product;
            if (maxproduct < product) maxproduct = product;
        }
    }
    return maxproduct;
};
console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([0,2]));


