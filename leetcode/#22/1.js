/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function generate(current, left, right) {
        if (current.length === 2*n) {
            res.push(current);
            return;
        }
        // console.log(n)
        // console.log(current)
        if(left < n) generate(current+"(", left+1, right);
        if(left > right) generate(current+")", left, right+1);
    }
    generate("(", 1, 0);
    return res;
};

console.log(generateParenthesis(3));