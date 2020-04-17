var ksum = function(data, n, sum) {
    let list = [];
    backtrack(data, list, n, sum);
    return list;
}
function backtrack(data, list, n, sum, tempList = [], start = 0) {
    if(tempList.length === n) {
        if(tempList.reduce((a, b) => a + b, 0) === sum) {
            list.push(tempList);  // 找到满足条件的
        }
        return;
    }
    // tempList 已经做过的选择
    // for 枚举出每一步可以进行选择的列表
    for (let i = start; i < data.length; i++) {
        // 数组里面的每一项都要选择
        tempList.push(data[i]);
        backtrack(data, list, n, sum, tempList.slice(0), i + 1);
        // 撤销上一步选择
        tempList.pop();
    }
}

console.log(ksum([1,2,3,4,5,7], 3, 10))

/**
 * 回溯思想模板
 * backtrack() {
 *  if() {
 *      中止条件
 *  }
 *  for {
 *      选择
 *      backtrack()
 *      撤销
 *  }
 * }
 */