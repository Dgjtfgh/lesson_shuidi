/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let hashset = new Set(words),
        ans = 0;
    for(let w of hashset) {
        for (let i = 1; i < w.length; i++) {
            let tail = w.slice(i)
            hashset.has(tail) && hashset.delete(tail);
        }
    }
    hashset.forEach(item => ans += item.length+1);
    return ans;
};


console.log(minimumLengthEncoding(["time", "me", "bell"]));
console.log(minimumLengthEncoding([ "me", "time"]));