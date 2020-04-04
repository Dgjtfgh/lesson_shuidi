/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const len = height.length;
    let max = 0;
        leftsum = 0,
        rightsum = 0,
        total = 0;
    let leftArr = [height[0]];
    let rightArr = [height[len - 1]];
    if(len < 1) return 0;
    for (var i = 1; i < len; i++) {
        max = Math.max(height[i], leftArr[i-1]);
        leftArr.push(max);
        rightArr.push(Math.max(height[len-1-i], rightArr[i-1]));
    }
    for (let i = 0; i < len; i++) {
        total += Math.min(leftArr[i], rightArr[len-1-i]) - height[i];
    }
    return total;
    // leftsum = eval(leftArr.join("+"));
    // rightsum = eval(rightArr.join("+"));
    // total = eval(height.join("+"));
    // return leftsum + rightsum - max*len - total;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([]));