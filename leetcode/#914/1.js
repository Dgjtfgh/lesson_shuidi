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
    for (let v of map.values()) {
        arr.push(v);
    }
    while (!arr.every(a => a === arr[0])) {
        arr.sort((a, b) => b - a);
        for (let i = 0; i < arr.length - 1; i++) {
            let c = arr[i] % arr[i + 1];
            arr[i] = c || arr[i + 1];
        }
    }
    // console.log(arr)
    if (arr[0] < 2) return false;
    return true;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1]));
console.log(hasGroupsSizeX([1, 1]));
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));