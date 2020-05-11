/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) return myPow(1/x, -n);
    if (n === 0) return 1;
    if (n === 1) return x;
    let res = 1;
    while (n > 1) {
        if (n % 2 === 1) {
            res = res * x;
            n -= 1;
        }
        x = x * x;
        n = n / 2;
    }
    return res * x;
};
console.log(myPow(2.00000, 10));
console.log(myPow(8.95371, -1));
