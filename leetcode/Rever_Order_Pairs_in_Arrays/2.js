/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let res = 0;
    points(nums);
    return res;
    function points(nums) {
        if (nums.length < 2) return nums;
        let mid = parseInt(nums.length / 2),
            left = nums.slice(0, mid),
            right = nums.slice(mid);
        // console.log(left, right, '---')
        return merge(points(left), points(right));
    }
    function merge(left, right) {
        // console.log(left, right)
        let temp = [],
            leftlen = left.length,
            rightlen = right.length,
            len = leftlen + rightlen;
        let i = 0,
            j = 0,
            index = 0;
        while (index < len) {
            if (i >= leftlen) {
                temp[index] = right[j];
                j += 1;
            } else if (j >= rightlen) {
                temp[index] = left[i];
                i += 1;
            } else if (left[i] > right[j]) {
                temp[index] = right[j];
                j += 1;
                res += leftlen - i;
            } else {
                temp[index] = left[i];
                i += 1;
            }
            index += 1;
        }
        // console.log(res, temp)
        return temp;
    }
};


// console.log(reversePairs([7,5,6,4]));
// console.log(reversePairs([7,2]));
console.log(reversePairs([1,3,2,3,1]));