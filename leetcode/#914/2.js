/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let map = new Map(),
        arr = [];
    if (deck.length < 2) return false;
    for (let d of deck) {
        map.has(d) ? map.set(d, map.get(d) + 1) : map.set(d, 1);
    }
    arr = [...map.values()];
    let res = arr[0];
    return arr.every(i => (res = gcd(res, i)) > 1);
};

var gcd = function (a, b) {
    return b === 0 ? a : gcd(b, a%b);
}
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
// console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
// console.log(hasGroupsSizeX([1]));
// console.log(hasGroupsSizeX([1, 1]));
// console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));