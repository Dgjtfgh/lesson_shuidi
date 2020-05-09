/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result;
    if (x<2) return parseInt(x);
    const dichotomy = (left, right) => {
        let mid = parseInt(left + (right - left)/2);
        // console.log(mid, '+')
        if (mid*mid === x) return result = mid;
        if (mid*mid < x && (mid+1)*(mid+1)> x) return result = mid;
        if (mid*mid > x) dichotomy(left, mid);
        else dichotomy(mid, right);
    }
    dichotomy(0, x);
    return result;
};
console.log(mySqrt(1));
console.log(mySqrt(4));
console.log(mySqrt(8));