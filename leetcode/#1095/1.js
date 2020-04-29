/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 *
 */
function MountainArray(arr) {
    this.get = function(index) {
        return arr[index];
    };
    this.length = function() {
        return arr.length;
    };
};
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let len = mountainArr.length(),
        left = 0,
        right = len - 1,
        mid = left + ((right - left) >> 1);
        // return mid;
    while (left <= right) {
        if (mountainArr.get(mid) < mountainArr.get(mid+1)) left = mid + 1;
        else right = mid - 1;
        mid = left + ((right - left) >> 1);
    }
    mid = left;
    if (mountainArr.get(mid) < target) return -1;
    if (mountainArr.get(mid) === target) return mid;
    left = 0;
    right = mid - 1;
    // console.log(left, right)
    while (left <= right) {
        let midv = left + ((right - left) >> 1);
        let midValue = mountainArr.get(midv);
        if (midValue === target) return midv;
        if (midValue < target) left = midv + 1;
        else right = midv - 1;
    }
    left = mid + 1;
    right = len - 1;
    // console.log(left, right)
    while (left <= right) {
        let midv = left + ((right - left) >> 1);
        let midValue = mountainArr.get(midv);
        if (midValue === target) return midv;
        if (midValue < target) right = midv - 1;
        else left = midv + 1;
    }
    return -1;
};
function search(mountainArr, left, right, ) {

}
let a1 = new MountainArray([1,2,3,4,5,3,1]);
let a2 = new MountainArray([0,1,2,4,2,1]);
let a3 = new MountainArray([1, 5, 2]);
console.log(findInMountainArray(3, a1));
console.log(findInMountainArray(3, a2));
console.log(findInMountainArray(2, a3));