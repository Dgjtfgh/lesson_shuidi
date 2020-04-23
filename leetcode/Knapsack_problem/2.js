/**
 * 01背包：f[i][j] = max(f[i][j], f[i - 1][j - v] + w)
 * 完全背包：f[i][j] = max(f[i][j], f[i][j - v] + w)
 */

// function knapsack(N, V, arr) {
//     let res = new Array(N+1).fill(new Array(V+1).fill(0));
//     for (let i = 1; i <= N; i++) {
//         for (let j = 1; j <= V; j++) {
//             res[i][j] = res[i - 1][j];
//             if (j >= arr[i-1][0]) {
//                 res[i][j] = Math.max(res[i][j], res[i][j - arr[i-1][0]] + arr[i-1][1]);
//             }
//         }
//         // console.log(res, i)
//     }
//     return res[N][V];
// }

function knapsack(N, V, arr) {
    let res = new Array(Math.max(N, V)+1).fill(0);
    console.log(res)
    for (let i = 1; i < N; i++) {
        for (let j = 0; j <= V; j++) {
            if(j >= arr[i-1][0]) res[j] = Math.max(res[j], res[j - arr[i-1][0]] + arr[i-1][1]);
        }
        // console.log(res)
    }
    return res[V];
}
console.log(knapsack(4, 5, [[1,2], [2, 4], [3, 4], [4, 5]]));