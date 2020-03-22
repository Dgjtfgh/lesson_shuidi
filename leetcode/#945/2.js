/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let count = 0;
    A.sort((a, b) => a-b);
    // console.log(A)
    for (let i = 1; i < A.length; i++) {
        if (A[i-1] >= A[i]) {
            // console.log(A[i-1], A[i])
            count += A[i-1] - A[i] + 1;
            // console.log(count, '+++')
            A[i] += A[i-1] - A[i] + 1;
        }
    }
    // console.log(A)
    return count;
};

console.log(minIncrementForUnique([3,2,1,2,1,7]));
console.log(minIncrementForUnique([3]));