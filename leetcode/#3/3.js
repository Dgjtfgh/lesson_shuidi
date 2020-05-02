/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len < 2) return len;
    let max = 0,
        map = new Map();
    for (let i = 0, j = 0; j < s.length; j++) {
        // console.log(i, max, map)
        if(map.has(s[j])) i = Math.max(map.get(s[j]) + 1, i);
        max = Math.max(max, j - i + 1);
        map.set(s[j], j);
    }
    return max;
};

console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("ab"));
console.log(lengthOfLongestSubstring("abcab"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));