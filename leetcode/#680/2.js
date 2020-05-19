/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let n = s.length,
        left = 0,
        right = n - 1;
    while(left < right) {
        if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            let flag1 = true, flag2 = true;
            for (let i = left, j = right - 1; i < j; i++, j--) {
                if (s[i] !== s[j]) {
                    flag1 = false;
                    break;
                }
            }
            for (let i = left + 1, j = right; i < j; i++, j--) {
                if (s[i] !== s[j]) {
                    flag2 = false;
                    break;
                }
            }
            return flag1 || flag2;
        }
    }
    return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("accbaca"));