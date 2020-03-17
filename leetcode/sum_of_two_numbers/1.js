/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp = 0;
    var arr = [];
    for(var i = 0,len = nums.length; i < len;i++ ){
        temp = target - nums[i];
        
        if(arr[temp] != undefined)
            return [arr[temp],i];
            arr[nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));