/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) { 
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    matrix.forEach(row=> row.reverse());
    return matrix;
};

var matrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
var matrix1 =
    [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
    ];
console.log(rotate(matrix));
console.log(rotate(matrix1));