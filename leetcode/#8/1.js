/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const res = parseInt(str, 10);
    if(isNaN(res)) {
        return 0;
    } else if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
        return res < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
    } else {
        return res;
    }
};

console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));