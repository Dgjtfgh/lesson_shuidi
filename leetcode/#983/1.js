/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = new Array(366 + 30).fill(0);
    let daySet = new Set(days);
    return miniconsume(1);
    function miniconsume(i) {
        if (i > 365) return 0;
        if (daySet.has(i)) {
            if (dp[i]) return dp[i];
            else{
                dp[i] = Math.min(miniconsume(i+1)+costs[0], miniconsume(i+7)+costs[1], miniconsume(i+30)+costs[2]);
                return dp[i];
            }
        } else return miniconsume(i+1);
    }
};

console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]));
console.log(mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]))