/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let ans = 0;
    for (let i = 2; i <= n; i++) {
        ans = (ans + m) % i
    }
    return ans;
};

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));
console.log(lastRemaining(5, 2));