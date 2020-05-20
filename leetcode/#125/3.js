/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let n = s.length,
        left = 0,
        right = n - 1;
    if (n === 0) return true;
    while(left < right) {
        if (!isNumChar(s[left])) left += 1;
        if (!isNumChar(s[right])) right -= 1;
        if (isNumChar(s[left]) && isNumChar(s[right])) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
                left += 1;
                right -= 1;
        } 
    }
    return true;
};
function isNumChar(c) {
    if (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z' || c.toLowerCase() >= '0' && c.toLowerCase() <= '9') return true;
    return false;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));