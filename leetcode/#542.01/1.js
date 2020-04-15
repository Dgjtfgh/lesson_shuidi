/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let len = matrix.length
        len1 = matrix[0].length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len1; j++) {
            if(matrix[i][j] !== 0) {
                // console.log(i, j, )
                matrix[i][j] = len + len1;
                if(i > 0) matrix[i][j] = Math.min(matrix[i-1][j] + 1, matrix[i][j]);
                if(j > 0) matrix[i][j] = Math.min(matrix[i][j-1] + 1, matrix[i][j]);
            }
        }
    }
    for (let i = len-1; i >= 0; i--) {
        for (let j = len1-1; j >= 0; j--) {
            if(matrix[i][j] !== 0) {
                if(i < len-1) matrix[i][j] = Math.min(matrix[i][j], matrix[i+1][j] + 1);
                if(j < len1-1) matrix[i][j] = Math.min(matrix[i][j], matrix[i][j+1] + 1);
            }
    
        }
    }
    return matrix;
};

console.log(updateMatrix([
[0,0,1,0,1,1,1,0,1,1],
[1,1,1,1,0,1,1,1,1,1],
[1,1,1,1,1,0,0,0,1,1],
[1,0,1,0,1,1,1,0,1,1],
[0,0,1,1,1,0,1,1,1,1],
[1,0,1,1,1,1,1,1,1,1],
[1,1,1,1,0,1,0,1,0,1],
[0,1,0,0,0,1,0,0,1,1],
[1,1,1,0,1,1,0,1,0,1],
[1,0,1,1,1,0,1,1,1,0]]));
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));
console.log(updateMatrix([[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]));