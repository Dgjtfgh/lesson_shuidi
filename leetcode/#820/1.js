/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    let lans = 0;
    for (let i = 0; i < words.length; i++) {
        let len = words[i].length,
            flag = 0;
        let j = i - 1;
        while (i > 0 && j >= 0) {
            if (words[i] === words[j].slice(-len)) {
                flag = 1;
                break;
            }
            j -= 1;
        }
        if(flag === 0) lans += (len+1);
    }
    let rans = 0;
    for (let i = words.length-1; i >= 0 ; i--) {
        let len = words[i].length,
            flag = 0;
        let j = i + 1;
        while (i < words.length-1 && j < words.length) {
            if (words[i] === words[j].slice(-len)) {
                flag = 1;
                break;
            }
            j += 1;
        }
        if(flag === 0) rans += (len+1);
    }
    return Math.min(lans, rans);
};


console.log(minimumLengthEncoding(["time", "me", "bell"]));
console.log(minimumLengthEncoding([ "me", "time"]));