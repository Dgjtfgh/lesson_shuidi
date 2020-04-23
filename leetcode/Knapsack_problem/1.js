/**
 * f[i][j] 表示前i个物品，总体积是j的情况下，总体积最大是多少
 * 
 * 1. 不选第 i 个物品， f[i][j] = f[i - 1][j];
 * 2. 选第 i 个物品， f[i][j] = f[i - 1][j - v[i]];
 * f[i][j] = max(1, 2);
 * 
 * f[0][0] = 0;
 */

// function knapsack(N, V, arr) {
//     let res = new Array(N+1).fill(new Array(V).fill(0));
//     for (let i = 1; i < N; i++) {
//         // console.log(res)
//         for (let j = 0; j < V; j++) {
//             res[i][j] = res[i - 1][j];
//             if (j >= arr[i][0]) {
//                 res[i][j] = Math.max(res[i][j], res[i - 1][j - arr[i][0]] + arr[i][1]);
//             }
//         }
//     }
//     return res[N][V-1];
// }

function knapsack(N, V, arr) {
    let res = new Array(Math.max(N, V)+1).fill(0);
    for (let i = 0; i < N; i++) {
        for (let j = V; j >= arr[i][0]; j--) {
            res[j] = Math.max(res[j], res[j - arr[i][0]] + arr[i][1]);
        }
        // console.log(res)
    }
    return res[V];
}
console.log(knapsack(4, 5, [[1,2], [2, 4], [3, 4], [4, 5]]));