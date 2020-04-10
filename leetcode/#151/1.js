/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let arr = s.split(' ').reverse();
    // for(let i = 0; i < arr.length; i++) {
    //     if (arr[i] === '') {
    //         arr.splice(i, 1);
    //         i -= 1;
    //     }
    // }
    // arr = arr.join(' ');
    // return arr;
    return s.split(' ').filter(item => item).reverse().join(' ');
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));