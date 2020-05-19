/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (isPalindrome(s)) return true;
    for (let i = 0; i < s.length; i++) {
        let arr = s.split('');
        arr.splice(i, 1)
        let S = arr.join('');
        if (isPalindrome(S)) return true;
    }
    return false;
};

var isPalindrome = function(s) {
    // let arr = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase().split('');
    return arr.join('') == arr.reverse().join('');
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("accbaca"));