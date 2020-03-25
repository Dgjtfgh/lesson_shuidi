/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 0) {
                ans += 2;
            }
            if(i > 0) ans += Math.max(grid[i][j]-grid[i-1][j], 0);
            else ans += grid[i][j];
            if(i < grid.length - 1) ans += Math.max(grid[i][j]-grid[i+1][j], 0);
            else ans += grid[i][j];
            if(j > 0) ans += Math.max(grid[i][j]-grid[i][j-1], 0);
            else ans += grid[i][j];
            if(j < grid[i].length - 1) ans += Math.max(grid[i][j]-grid[i][j+1], 0);
            else ans += grid[i][j];
        }
    }
    return ans;
};

console.log(surfaceArea([[2]]));                     // 10
console.log(surfaceArea([[1,2],[3,4]]));             // 34
console.log(surfaceArea([[1,0],[0,2]]));             // 16
console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]])); // 32
console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]])); // 46
