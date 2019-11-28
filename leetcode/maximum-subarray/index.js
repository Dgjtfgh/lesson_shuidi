function maxSubarray(nums) {
    let thissum, maxsum = -Number.MAX_VALUE;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            // 每一趟的和是thissum
            // 最大值更替
            thissum = 0;
            for(let k = i; k <= j; k++){
                thissum += nums[k];
            }
            if(thissum > maxsum){
                maxsum = thissum;
            }

        }
    }
    return maxsum;
}
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));