/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    return words.map(word => {
        return word.split('').reverse().join('')
    }).sort().reduce((result, value, index, arr) => {
        // console.log(value, arr)
        let next = arr[index+1] || ''
        if (value.length > next.length || next.slice(0, value.length) != value) {
            result += value.length + 1
        }
        return result;
    }, 0)
};


console.log(minimumLengthEncoding(["time", "me", "bell"]));
console.log(minimumLengthEncoding([ "me", "time"]));