/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let ans = [];
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === "(") {
            if (i % 2 !== 0) ans[i] = 1;
            else ans[i] = 0;
        } else if (seq[i] === ")") {
            if (i % 2 !== 0) ans[i] = 0;
            else ans[i] = 1;
        }
    }
    return ans;
};

console.log(maxDepthAfterSplit("(()())"));
console.log(maxDepthAfterSplit("()(())()"));