/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if(z===0) return true;
    if(x+y<z) return false;
    if(x===0 || x===y) return z%y===0;
    if(y===0) return z%y===0;
    return z%gcd(x, y)===0;
};

var gcd = function(a, b) {
    // let poor = 0,
    //     max = a,
    //     min = b;
    // while (poor !== min) {
    //     let temp = max;
    //     max = Math.max(max, min);
    //     min = Math.min(temp, min);
    //     poor = max - min;
    //     max = poor;
    // }
    // return poor;
    if (b == 0) return a;
    return gcd(b, a % b);
}

console.log(canMeasureWater(3, 5, 4));
console.log(canMeasureWater(2, 6, 5));
console.log(canMeasureWater(0, 0, 0));
console.log(canMeasureWater(1, 1, 12));
// console.log(gcd(98, 63));