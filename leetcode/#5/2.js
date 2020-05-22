/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";
    let start = 0,
        end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - parseInt((len - 1)/2);
            end = i + parseInt(len / 2);
        }
    } 
    return s.slice(start, end + 1);
};
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));