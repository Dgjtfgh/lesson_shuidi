/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n >= 0) return point(x, n);
    else return 1.0/point(x, -n);
};
function point(x, n) {
    // console.log(n, '+++')
    if (n === 1) return x;
    let res = point(x, parseInt(n/2));
    // console.log(res, n)
    if (n%2 === 0) return res * res;
    else {
        // console.log(res, n, '---')
        return res * res * x;
    }
}
console.log(myPow(2.00000, 10));