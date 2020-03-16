/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let len = S.length,
        res = '',
        temp = -1;
    if (len < 3) return S;
    for(var i = 0; i < len - 1; i++) {
        if(S[i] != S[i+1]) {
            res += S[i] + (i-temp);
            temp = i;
        }
    }
    res += S[i] +(i-temp);
    if(len > res.length) return res;
    else return S;
};

console.log(compressString("aabcccccaaa"));