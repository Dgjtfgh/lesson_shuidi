/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0,
        right = height.length - 1;
    while (left !== right) {
        let h = Math.min(height[left], height[right]);
        max = Math.max(max, h*(right-left));
       height[left] <= height[right] ? left += 1 : right -= 1;
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));