// 动态规划算法

function lwstDP(a, n, b, m) {
    let dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0));
    for(let i = 0; i < n+1; i++) {
        for(let j = 0; j < m+1; j++) {
            if(i*j === 0) { dp[i][j] = i + j; continue; }
            if (a[i-1] === b[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1; 
        }
    }
    return dp[n][m];
}
var a = "mitcmu";
var b = "mtacnu";
var n = a.length;
var m = b.length;
console.log(lwstDP(a, n, b, m));