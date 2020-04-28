/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let temp = 0; 
    nums.forEach(element => {
        temp ^= element;
        // console.log(temp)
    });
    let flag = 1;
    while ((temp & flag) === 0) flag <<= 1;
    // let flag = temp.toString(2).length -1;
    let a = 0,
        b = 0;
    nums.forEach(e => {
        // if (e >> flag & 1) a ^= e;
        // else b ^= e;
        if ((e & flag) === 0) a ^= e;
        else b ^= e;
    });
    return [a, b];
};
console.log(singleNumbers([4,1,4,6]));
console.log(singleNumbers([1,2,10,4,1,4,3,3]));