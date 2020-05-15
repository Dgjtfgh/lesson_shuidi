/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one = 0,
        two = 0;
    nums.forEach(item => {
        one = ~two & (one ^ item);
        two = ~one & (two ^ item);
    })
    return one;
};

console.log(singleNumber([2,2,3,2]));
console.log(singleNumber([0,1,0,1,0,1,99]))