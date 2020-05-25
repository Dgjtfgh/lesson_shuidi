/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let len1 = nums1.length;
    let len2 = nums2.length;
    // console.log(len1, len2)
    let i = 0,
        j = 0;
    while (i + j <= len1 + len2 - 1) {
        // console.log(i, j)
        if (i < len1 && j < len2) {
            if (nums1[i] < nums2[j]) {
                arr.push(nums1[i]);
                // console.log(arr, '+++')
                i++;
            } else if (nums1[i] > nums2[j]) {
                arr.push(nums2[j]);
                // console.log(arr, '---')
                j++;
            } else {
                arr.push(nums1[i]);
                i++;
                // console.log(arr, '111')
                arr.push(nums2[j]);
                j++;
            }
        } else if (i === len1) {
            arr = arr.concat(nums2.slice(j));
            break;
        } else if (j === len2) {
            arr = arr.concat(nums1.slice(i));
            break;
        } 
    }
    console.log(arr)
    let len = arr.length;
    let tab = parseInt(len/2)
    return len%2===0?(arr[tab-1]+arr[tab])/2:arr[tab];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));