/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase().split('');
    return arr.join('') == arr.reverse().join('');
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));