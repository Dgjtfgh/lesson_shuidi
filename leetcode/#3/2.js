/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len < 2) return len;
    let max = 0,
        arr = [];
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]);
        if(index !== -1) arr.splice(0, index + 1);
        arr.push(s[i]);
        max = Math.max(arr.length, max);
    }
    return max;
};

console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("ab"));
console.log(lengthOfLongestSubstring("abcab"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));