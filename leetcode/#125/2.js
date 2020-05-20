/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
    let n = s.length,
        left = 0,
        right = n - 1;
    while(left < right) {
        if (s[left] != s[right]) return false;
        left += 1;
        right -= 1;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));