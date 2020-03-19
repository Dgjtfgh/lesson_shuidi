/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    // let count = 0,
    //     map = new Map(),
    //     flag = true;
    // for(let i of s) {
    //     map.has(i)?map.set(i, map.get(i)+1):map.set(i, 1);
    // }
    // for (let m of map.values()) {
    //     // console.log(m)
    //     if(m%2 === 0) {
    //         count += m;
    //     } else {
    //         if(flag) {
    //             count++;
    //             flag = false;
    //         }
    //         count += (m-1);
    //     }
    // }
    // return count;
    let count = 0,
        S = new Array(58).fill(0);
    for (let i of s) {
        S[i.charCodeAt() - 65]++;
    }
    // console.log(parseInt((5 / 2)));
    for(let j of S) {
        count += parseInt((j / 2))*2;
        // console.log(parseInt((j / 2))*2);
        // console.log(j);
    }
    console.log(S[56]);
    return count<s.length ? (count + 1):count;
};

console.log(longestPalindrome("zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez"));