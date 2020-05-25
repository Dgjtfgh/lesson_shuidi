/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums1, nums2];
    const len1 = nums1.length;
    const len2 = nums2.length;
    let low = 0,
        high = len1;
    let partlen1, partlen2;
    while (low <= high) {
        partlen1 = low + parseInt((high - low)/2);
        partlen2 = parseInt((len1+len2+1)/2) - partlen1;
        const maxLeftA = partlen1 === 0 ? -Infinity : nums1[partlen1-1];
        const minRightA = partlen1 === len1 ? Infinity : nums1[partlen1];
        const maxLeftB = partlen2 === 0 ? -Infinity : nums2[partlen2-1];
        const minRightB = partlen2 === len2 ? Infinity : nums2[partlen2];
        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
            return (len1+len2)%2===1?Math.max(maxLeftA, maxLeftB):(Math.max(maxLeftA, maxLeftB)+Math.min(minRightA, minRightB))/2;
        } else if (maxLeftA > minRightB) high = partlen1 - 1;
        else low = low + 1;
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));