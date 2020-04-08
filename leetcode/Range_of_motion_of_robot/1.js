/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let ans = 0,
        hashmap = new Map();
    function robot(i, j) {
        if(i < 0 || j < 0 || i >= m || j >= n) return;
        let sum = (i + '' + j).split('').reduce((a, b) => +a + +b);
        // console.log(sum)
        if (sum <= k && !hashmap.has(`[${i},${j}]`)) {
            ans += 1;
            hashmap.set(`[${i},${j}]`, 0);
            robot(i + 1, j)
            robot(i, j + 1)
        }
    }
    robot(0, 0);
    console.log(hashmap)
    return ans;
};

console.log(movingCount(1, 2, 1));
console.log(movingCount(3, 1, 0));