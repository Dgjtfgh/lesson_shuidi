/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let sum = 0,
        len1 = grid.length,
        len2 = grid[0].length;
    if (grid && len1) {
        for (let i = 0; i < len1; i++) {
            for (let j = 0; j < len2; j++) {
                if (grid[i][j] === 1) {
                    sum += 1;
                    sink(grid, i, j);
                }
            }
        }
    }
    return sum;
};
function sink(grid, i, j) {
    let len1 = grid.length,
        len2 = grid[0].length;
    if(i < 0 || j < 0 || i > len1-1 || j > len2-1) return;
    if (grid[i][j] === 1) {
        grid[i][j] = 0;
        sink(grid, i, j-1);
        sink(grid, i-1, j);
        sink(grid, i+1, j);
        sink(grid, i, j+1);
    }
}

console.log(numIslands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]]));
console.log(numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]]));