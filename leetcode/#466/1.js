/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let arr1 = s1.split(""),
        arr2 = s2.split("");
    let res = 0,
        index = 0;
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[index]) index += 1;
            if (index === arr2.length) {
                res += 1;
                index = 0;
            }
        }
    }
    return parseInt(res/n2);
};

console.log(getMaxRepetitions("acb", 4, "ab", 2));