/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0,
        right = 0;
    let win = new Map(),
        need = new Map();
    let len = 0;
    for(let char of t) {
        if (!need.has(char)) need.set(char, 0);
        if (!win.has(char)) win.set(char, 0);
        need.set(char, need.get(char)+1);
    }
    let count = 0,
        start = 0,
        end = Number.POSITIVE_INFINITY;
    console.log(win, need)
    while (right < s.length) {
        if (need.has(s[right])) {
            win.set(s[right], win.get(s[right])+1);
            if (win.get(s[right]) === need.get(s[right])) count++;
        }
        right++;
        // console.log(need.size)
        while (count === need.size) {
            if (right - left < end - start) {
                start = left;
                end = right;
            }
            if (need.has(s[left])) {
                if (win.get(s[left]) === need.get(s[left])) count--;
                win.set(s[left], win.get(s[left])-1);
            }
            left++;
        }
    }
    console.log
    return end === Number.POSITIVE_INFINITY ? "" : s.substring(start, end);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));