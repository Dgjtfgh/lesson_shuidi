/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let res = JSON.parse(JSON.stringify(board)),
        dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let live = 0;
            dirs.forEach(dir => {
                let x = i+dir[0],
                    y = j+dir[1];
                if (x >= 0 && x < res.length && y >= 0 && y < res[0].length) live += res[x][y];
            })
            if (board[i][j] === 0) board[i][j] = (live === 3 ? 1 : 0);
            else board[i][j] = (live > 3 || live < 2 ? 0 : 1);
        }
    }
    return board;
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));