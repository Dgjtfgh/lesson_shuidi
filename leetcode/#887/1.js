/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    let dp = Array(K+1).fill(0),
        res = 0;
    for (; dp[K] < N; ++res) {
        for (let i = K; i > 0; --i) {
            dp[i] = dp[i] + dp[i-1] +1;
        }
    }
    return res;
}

console.log(superEggDrop(1, 2));
console.log(superEggDrop(2, 6));
console.log(superEggDrop(3, 14));