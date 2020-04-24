var a = "mitcmu";
var b = "mtacnu";
var n = a.length;
var m = b.length;
var minDist = Infinity;
// 回溯算法  穷举
function lwstBT(i, j, edist) {
    if (i == n || j == m) {
        if (i < n) edist += (n-i);
        if (j < m) edist += (m-j);
        if (edist < minDist) minDist = edist;
        return;
    }
    // 递归 穷举
    if (a[i] == b[j]) {
        lwstBT(i+1, j+1, edist);
    } else {
        lwstBT(i+1, j, edist+1);
        lwstBT(i, j+1, edist+1);
        lwstBT(i+1, j+1, edist+1);
    }
}

lwstBT(0, 0, 0);
console.log(minDist);