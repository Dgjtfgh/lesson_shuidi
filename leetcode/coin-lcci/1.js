/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let coins = [1, 5, 10, 25],
        res = new Array(n+1).fill(0);
    res[0] = 1;
    for (let i = 0; i < 4; i++) {
        for (let j = coins[i]; j <= n; j++) {
            if (j - coins[i] >= 0) res[j] = (res[j] +res[j - coins[i]])%1000000007;
        }
    }
    return res[n];
};

console.log(waysToChange(5));
console.log(waysToChange(10));