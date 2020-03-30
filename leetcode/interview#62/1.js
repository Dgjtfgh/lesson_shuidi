/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let arr = [],
        sub = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    while (arr.length > 1) {
        let len = arr.length;
        let temp = m % len;
        // console.log(arr)
        // console.log('len', len)
        // console.log('len - sub', len - sub)
        // console.log('temp', temp)
        if (temp === 0) {
            if(sub > 0) sub = sub - 1;
            else sub = len - 1;
            arr.splice(sub, 1);
            // if(arr.length <= sub) sub = 0;
        } else if (temp > len-sub){
            sub = temp - (len - sub) - 1;
            arr.splice(sub, 1);
            // console.log(arr)
            // console.log('下标', sub, '--')
        } else  {
            arr.splice(sub + temp - 1, 1);
            sub = sub + temp - 1;
            // console.log(arr)
            // console.log('下标', sub, '++')
        }
        if(arr.length <= sub) sub = 0;
    }
    return arr[0];
};

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));
console.log(lastRemaining(5, 2));

