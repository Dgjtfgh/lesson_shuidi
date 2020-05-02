/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len < 2) return len;
    let max = stringLength(s.slice(0)),
        i = 1;
    while (max <= len - 1 - i) {
        let temp = stringLength(s.slice(i))
        if (max < temp) max = temp;
        i += 1;
    }
    return max;
};
function stringLength(s) {
    let set = new Set(),
        res = 1,
        j = 1;
    set.add(s[0]);
    while (j < s.length && !set.has(s[j])) {
        set.add(s[j]);
        res += 1;
        j += 1;
    }
    return res;
}

console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("ab"));
console.log(lengthOfLongestSubstring("abcab"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));