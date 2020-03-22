/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let map = new Map(),
        stack = [],
        count = 0,
        j = 0;
    // if(A.length < 2) return 0;
    for (let i = 0; i < A.length; i++) {
        if (!map.has(A[i])) {
            map.set(A[i], i);
        } else {
            stack.push(i);
        }  
    }
    // console.log(stack)
    // console.log(map)
    // console.log(stack.length)
    // for (let j = 0; j < stack.length; j++) {
        // console.log(stack[j])
        while (j < stack.length) {
            A[stack[j]]++;
            count++;
            // console.log(A[stack[j]])
            if (!map.has(A[stack[j]])) {
                map.set(A[stack[j]], stack[j]);
                j++;
            }
        }
    // }
    return count;
};

console.log(minIncrementForUnique([3,2,1,2,1,7]));
console.log(minIncrementForUnique([3]));