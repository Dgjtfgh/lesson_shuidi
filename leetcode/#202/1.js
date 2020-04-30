/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while (n !== 1 && !set.has(n)) {
        let sum = 0;
        set.add(n);
        while (n > 0) {
            let temp = n % 10;
            n = parseInt(n / 10);
            sum += temp * temp;
        }
        n = sum;
        // console.log(n)
    }
    return n === 1;
};

console.log(isHappy(19));