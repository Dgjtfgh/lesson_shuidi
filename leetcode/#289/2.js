/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let live = 0;
            dirs.forEach(dir => {
                let x = i+dir[0],
                    y = j+dir[1];
                if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) live += board[x][y] < 1 ? 0 : 1;
            })
            if (board[i][j] === 0) board[i][j] = (live === 3 ? -1 : 0);
            else board[i][j] = (live > 3 || live < 2 ? 2 : 1);
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === -1) board[i][j] = 1;
            if (board[i][j] === 2) board[i][j] = 0;
        }
    }
    return board;
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));