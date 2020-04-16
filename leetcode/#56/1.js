/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    let arr = intervals.sort((a, b) => a[0] - b[0]);
    console.log(arr)
    let res = [];
    let i = 0,
        j = 1,
        temp = arr[0][1];
    while (j <= arr.length) {
        if(j === arr.length) {
            if (temp > arr[j-1][1]) res.push([arr[i][0], temp]);
            else res.push([arr[i][0], arr[j-1][1]]);
            break;
        }
        if (temp < arr[j][0]) {
            res.push([arr[i][0], temp]);
            temp = arr[j][1];
            i = j;
        } else {
            if (temp < arr[j][1]) {
                temp = arr[j][1];
            }
        }
        j += 1;
    }
    return res;
};

// console.log(merge([[1,4],[0,2],[3,5]]));
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,3],[0,4], [5, 6]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));
console.log(merge([[2,3],[4,5],[6,11],[8,9],[1,10]]));