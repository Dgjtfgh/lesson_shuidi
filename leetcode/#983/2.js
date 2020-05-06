/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    // let dp = new Array(366 + 30).fill(0),
    //     len = days.length;
    // for (let i = days[len-1], k = len - 1; i >= days[0]; i--) {
    //     if (i === days[k]) {
    //         dp[i] = Math.min(dp[i+1]+costs[0], dp[i+7]+costs[1], dp[i+30]+costs[2]);
    //         k -= 1;
    //     } else dp[i] = dp[i+1];
        
    // }
    // return dp[days[0]];

    // 优化
    let len = days.length, 
        dp = new Array(days[len-1]+1).fill(0);
    let daySet = new Set(days);
    for (let i = 1; i < dp.length; i++) {
        if (!daySet.has(i)) {
            dp[i] = dp[i-1];
            continue;
        }
        dp[i] = dp[i-1] + costs[0];
        let m = i >= 7 ? i - 7 : 0, n = i >= 30 ? i - 30 : 0;
        dp[i] = Math.min(dp[i], dp[m] + costs[1], dp[n] + costs[2])
    }
    return dp[days[len-1]];
};

console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]));
console.log(mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]))