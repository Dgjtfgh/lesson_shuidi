/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let side = 0,
        row = matrix.length,
        col = matrix[0].length;
    if (matrix === null || row === 0 || col === 0) return side;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                side = Math.max(side, 1);
                let cur = Math.min(row - i, col - j);
                for (let k = 1; k < cur; k++) {
                    let flag = true;
                    if (matrix[i + k][j + k] === 0) break;
                    for (let g = 0; g < k; g++) {
                        if (matrix[i + k][j + g] === 0 || matrix[i + g][j + k] === 0) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) side = Math.max(side, k+1);
                    else break;
                }
            }
            return side * side;
        }
    }
};

console.log(maximalSquare(
    [[1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]]));