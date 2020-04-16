/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    res.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (res[res.length-1][1] < intervals[i][0]) {
            res.push(intervals[i]);
        } else {
            if (res[res.length-1][1] < intervals[i][1]) {
                res[res.length-1][1] = intervals[i][1];
            }
        }
    }
    return res;
};

console.log(merge([[1,4],[0,2],[3,5]]));
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,3],[0,4], [5, 6]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));
console.log(merge([[2,3],[4,5],[6,11],[8,9],[1,10]]));