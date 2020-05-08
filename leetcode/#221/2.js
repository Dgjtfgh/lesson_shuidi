/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length === 0) return 0;
    let row = matrix.length,
        col = matrix[0].length,
        max = 0;
    // let dp = new Array(row).fill(Array(col).fill(0));
    let dp = Array.from({
        length: row
      }, x => Array.from({
        length: col
      }))
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0){ dp[i][j] = 1;}
                else {dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;}
            } else {dp[i][j] = 0;}
            max = Math.max(max, dp[i][j]);
        }
    }
    return max * max;
};

console.log(maximalSquare(
    [["1","0","1","0"],["1","0","1","1"],["1","0","1","1"],["1","1","1","1"]]));
console.log(maximalSquare(
    [["1"]]));