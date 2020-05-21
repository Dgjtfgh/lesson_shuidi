/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let len = s.length,
        arr = new Array(1 << 5).fill(-1),
        status = 0,
        res = 0;
    arr[0] = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === 'a') status ^= 1 << 0;
        else if (s[i] === 'e') status ^= 1 << 1;
        else if (s[i] === 'i') status ^= 1 << 2;
        else if (s[i] === 'o') status ^= 1 << 3;
        else if (s[i] === 'u') status ^= 1 << 4;
        if (~arr[status]) res = Math.max(res, i + 1 - arr[status]);
        else arr[status] = i + 1;
    }
    return res;
};

console.log(findTheLongestSubstring("eleetminicoworoep")); // 13
console.log(findTheLongestSubstring("leetcodeisgreat")); //5
console.log(findTheLongestSubstring("bcbcbc")); // 6